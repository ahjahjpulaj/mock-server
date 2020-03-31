const Mock = require("../models/mock.model");
const mongoose = require("mongoose");

class MockRepository {
  async findAll() {
    try {
      return await Mock.find({}, null, {}, function(error, docs) {
        return docs;
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports = MockRepository;
