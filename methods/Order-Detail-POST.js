"use strict";

var AWS = require("aws-sdk");

var dynamo = new AWS.DynamoDB();

exports.handler = function (event, context, callback) {
  dynamo.putItem(
    {
      TableName: "Order-Details",
      Item: {
        ReceptionId: { S: event.id },
        Alerones: {
          M: {
            has: { BOOL: event.details.Alerones.M.has.BOOL },
            images: { L: event.details.Alerones.M.images.L },
          },
        },
        Codigos: {
          M: {
            has: { BOOL: event.details.Codigos.M.has.BOOL },
            images: { L: event.details.Codigos.M.images.L },
          },
        },
        Copete: {
          M: {
            has: { BOOL: event.details.Copete.M.has.BOOL },
            images: { L: event.details.Copete.M.images.L },
          },
        },
        Espejos: {
          M: {
            has: { BOOL: event.details.Espejos.M.has.BOOL },
            images: { L: event.details.Espejos.M.images.L },
          },
        },
        Estribos: {
          M: {
            has: { BOOL: event.details.Estribos.M.has.BOOL },
            images: { L: event.details.Estribos.M.images.L },
          },
        },
        Extintor: {
          M: {
            has: { BOOL: event.details.Extintor.M.has.BOOL },
            images: { L: event.details.Extintor.M.images.L },
          },
        },
        Facia: {
          M: {
            has: { BOOL: event.details.Facia.M.has.BOOL },
            images: { L: event.details.Facia.M.images.L },
          },
        },
        Gobernado: {
          M: {
            has: { BOOL: event.details.Gobernado.M.has.BOOL },
            images: { L: event.details.Gobernado.M.images.L },
          },
        },
        Llantas: {
          M: {
            has: { BOOL: event.details.Llantas.M.has.BOOL },
            images: { L: event.details.Llantas.M.images.L },
          },
        },
        Loderas: {
          M: {
            has: { BOOL: event.details.Loderas.M.has.BOOL },
            images: { L: event.details.Loderas.M.images.L },
          },
        },
        Parabrisas: {
          M: {
            has: { BOOL: event.details.Parabrisas.M.has.BOOL },
            images: { L: event.details.Parabrisas.M.images.L },
          },
        },
        Regobernado: {
          M: {
            has: { BOOL: event.details.Regobernado.M.has.BOOL },
            images: { L: event.details.Regobernado.M.images.L },
          },
        },
        Spoilers: {
          M: {
            has: { BOOL: event.details.Spoilers.M.has.BOOL },
            images: { L: event.details.Spoilers.M.images.L },
          },
        },
      },
    },
    function (err, data) {
      if (err !== null) {
        callback(err);
      } else {
        callback(null, null);
      }
    }
  );
};
