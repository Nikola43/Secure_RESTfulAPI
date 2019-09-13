const express = require('express');
const userModel = require('../../../models/user');

const getUserById = async (req, res, next) => {
    let {userId} = req.params;
    let user = {};

    await userModel.findByPk(userId).then(data => {
        user = data;
    });

    if (user.length < 1) {
        return res.status(404).json({
            "errors": [{
                "msg": " no user found"
            }]
        })
    }

    return res.status(200).json(user);
};

const getUsers = async (req, res, next) => {
    let userList = [];

    await userModel.findAll().then(users => {
        userList = users;
    });

    if (userList.length < 1) {
        return res.status(404).json({
            "errors": [{
                "msg": " no user found"
            }]
        })
    }

    return res.status(200).json({
        "success": [{
            "msg": " user fetched successfully",
            "data": userList
        }]
    })
};

module.exports = {
    getUserById: getUserById,
    getUsers: getUsers
};