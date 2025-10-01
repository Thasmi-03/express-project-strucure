// import express from "express";

const getUser = (req, res) => {
  res.send("This is GET Users");
};

const getOneUser = (req, res) => {
  res.send("This is GET one Users");
};

const postUser = (req, res) => {
  res.send("This is  CREATE Users");
};

const putUser = (req, res) => {
  res.send("This is UPDATE Users");
};

const deleteUser = (req, res) => {
  res.send("This is DELETE  Users");
};

export { getUser, postUser, putUser, deleteUser, getOneUser };
