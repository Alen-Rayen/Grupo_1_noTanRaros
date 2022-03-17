let fs = require('fs');
let path = require('path');
const { Op } = require('sequelize');
let db = require('../database/models');

const productVerify = (carrito, id) => {

    let index = -1;

    for(let i = 0; i < carrito.length; i++){

        if(carrito[i].id == +id){
            index = i;
            break;
        }
    }
    return index
}


module.exports = {
    showCart: async (req, res) => {

        if(!req.session.cart){
            return res.status(500).json({
                ok: false,
                msg: 'Error cargando el carrito'
            })
        }

        let response = {
            ok: true,
            meta: {
                total: req.session.cart.length
            },
            data: req.session.cart
        }

        return res.status(200).json(response)
    },
    add: async (req, res) => {
        try {
            
            let product = await db.Product.findByPk(req.params.id, {
                include: [
                    {association: 'products_images',
                        attributes: ['image']
                    }
                ]
            });

            const {id, name, price, discount} = product;

            let item = {
                id,
                name,
                price,
                discount,
                image: product.products_images[0].image,
                amount: 1,
                total: price
            }

            if(req.session.cart.length === 0){

                let order = await db.Order.create({
                    user_id: req.session.user.id,
                    state: 'pending'
                })

                item = {
                    ...item,
                    order_id: order.id,
                }

                await db.Order_item.create({
                    order_id: order.id,
                    product_id: item.id,
                    user_id: order.user_id,
                    quantity: 1
                })

                req.session.cart.push(item)
            }else{

                let index = productVerify(req.session.cart, req.params.id);

                let order = await db.Order.findOne({
                    where: {
                        user_id: req.session.user.id,
                        state: 'pending'
                    }
                })

                if(index === -1){
                    item = {
                        ...item,
                        order_id: order.id
                    }

                    req.session.cart.push(item);

                    await db.Order_item.create({
                        order_id: order.id,
                        product_id: item.id,
                        user_id: order.user_id,
                        quantity: 1
                    })
                }else{

                    let product = req.session.cart[index]
                    product.amount++;
                    product.total = product.amount * product.price;
                    req.session.cart[index] = product;

                    await db.Order_item.update(
                        {
                            quantity: product.amount
                        },
                        {
                            where: {
                                order_id: product.order_id,
                                product_id: product.id
                            }
                        }
                    )
                }
            }

            let response = {
                ok: true,
                meta: {
                    total: req.session.cart.length
                },
                data: req.session.cart
            }

            return res.status(200).json(response)

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    remove: async (req, res) => {
        
        try {
            
            let index = productVerify(req.session.cart, req.params.id);
            let product = req.session.cart[index];

            if(product.amount > 1){

                product.amount--
                product.total = product.amount * product.price;
                req.session.cart[index] = product;

                await db.Order_item.update(
                    {
                        quantity: product.amount
                    },
                    {
                        where: {
                            order_id: product.order_id,
                            product_id: product.id
                        }
                    }
                )
            }else{

                req.session.cart.splice(index,1);

                await db.Order_item.destroy({
                    where: {
                        product_id: product.id,
                        order_id: product.order_id
                    }
                })

            }

            let response = {
                ok: true,
                meta: {
                    total: req.session.cart.length
                },
                data: req.session.cart
            }

            return res.status(200).json(response)

        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    removeItem: async(req, res) => {
        
        try {
            
            let index = productVerify(req.session.cart,req.params.id);
            let product = req.session.cart[index];

            req.session.cart.splice(index,1);

            await db.Order_item.destroy({
                where: {
                    product_id: product.id,
                    order_id: product.order_id
                }
            })

            let response = {
                ok: true,
                meta: {
                    total: req.session.cart.length
                },
                data: req.session.cart
            }

            return res.status(200).json(response)

        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    empty: async(req, res) => {
        
        try {
            await db.Order_item.destroy({
                where: {
                    user_id : req.session.user.id
                }
            })
            await db.Order.destroy({
                where: {
                    user_id: req.session.user.id,
                    state: 'pending'
                }
            })

            req.session.cart = [];

            let response = {
                ok: true,
                meta: {
                    total: req.session.cart.length
                },
                data: req.session.cart
            }

            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}