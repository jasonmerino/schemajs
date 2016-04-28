'use strict';

function dynamoDbConformer(type, value) {
	switch (type) {
		case Number:
			return {
				N: value.toString(),
			};
		case String:
			return {
				S: value.toString(),
			};
	};
}

function defaultConformer(type, value) {
	return type(value);
}

function defineConformer(conformer) {
	switch (conformer) {
		case 'dynamodb':
			return dynamoDbConformer;
		default:
			return defaultConformer;
	}
}

function schema(schema, payload, conformer) {
	var conformed = {};
	var conformerFunction = defineConformer(conformer);
	for (var key in payload) {
		switch (schema[key]) {
		case Number:
			conformed[key] = conformerFunction(Number, payload[key]); break;
		case String:
			conformed[key] = conformerFunction(String, payload[key]); break;
		default:
			break;
		}
	}
	return conformed;
}

module.exports = schema;