'use strict';

var AWS = require('aws-sdk');

var dynamo = new AWS.DynamoDB();

exports.handler = function (event, context, callback) {
    dynamo.query({
        TableName: 'Order-Details',
        ProjectionExpression: 'Alerones, Codigos, Copete, Espejos, Estribos, Extintor, Facia, Gobernado, Llantas, Loderas, Parabrisas, ReceptionId, Regobernado, Spoilers',
        KeyConditionExpression: 'ReceptionId = :id',
        ExpressionAttributeValues: { ':id': { S: event.id } }
    }, function (err, data) {
        loadDetails(err, data, event.id, {}, callback);
    });
}

function loadDetails(err, data, id, details, callback) {
    if (err === null) {
        var alerones = {
            "has": data.Items[0].Alerones.M.has.BOOL,
            "images": []
        }
        var codigos = {
            "has": data.Items[0].Codigos.M.has.BOOL,
            "images": []
        }
        var copete = {
            "has": data.Items[0].Copete.M.has.BOOL,
            "images": []
        }
        var espejos = {
            "has": data.Items[0].Espejos.M.has.BOOL,
            "images": []
        }
        var estribos = {
            "has": data.Items[0].Estribos.M.has.BOOL,
            "images": []
        }
        var extintor = {
            "has": data.Items[0].Extintor.M.has.BOOL,
            "images": []
        }
        var facia = {
            "has": data.Items[0].Facia.M.has.BOOL,
            "images": []
        }
        var gobernado = {
            "has": data.Items[0].Gobernado.M.has.BOOL,
            "images": []
        }
        var llantas = {
            "has": data.Items[0].Llantas.M.has.BOOL,
            "images": []
        }
        var loderas = {
            "has": data.Items[0].Loderas.M.has.BOOL,
            "images": []
        }
        var parabrisas = {
            "has": data.Items[0].Parabrisas.M.has.BOOL,
            "images": []
        }
        var regobernado = {
            "has": data.Items[0].Regobernado.M.has.BOOL,
            "images": []
        }
        var spoilers = {
            "has": data.Items[0].Spoilers.M.has.BOOL,
            "images": []
        }

        data.Items[0].Alerones.M.images.L.forEach(function (detalle) {
            alerones["images"].push(detalle.S);
        });

        data.Items[0].Codigos.M.images.L.forEach(function (detalle) {
            codigos["images"].push(detalle.S);
        });

        data.Items[0].Copete.M.images.L.forEach(function (detalle) {
            copete["images"].push(detalle.S);
        });

        data.Items[0].Espejos.M.images.L.forEach(function (detalle) {
            espejos["images"].push(detalle.S);
        });

        data.Items[0].Estribos.M.images.L.forEach(function (detalle) {
            estribos["images"].push(detalle.S);
        });

        data.Items[0].Extintor.M.images.L.forEach(function (detalle) {
            extintor["images"].push(detalle.S);
        });

        data.Items[0].Facia.M.images.L.forEach(function (detalle) {
            facia["images"].push(detalle.S);
        });

        data.Items[0].Gobernado.M.images.L.forEach(function (detalle) {
            gobernado["images"].push(detalle.S);
        });

        data.Items[0].Llantas.M.images.L.forEach(function (detalle) {
            llantas["images"].push(detalle.S);
        });

        data.Items[0].Loderas.M.images.L.forEach(function (detalle) {
            loderas["images"].push(detalle.S);
        });

        data.Items[0].Parabrisas.M.images.L.forEach(function (detalle) {
            parabrisas["images"].push(detalle.S);
        });

        data.Items[0].Regobernado.M.images.L.forEach(function (detalle) {
            regobernado["images"].push(detalle.S);
        });

        data.Items[0].Spoilers.M.images.L.forEach(function (detalle) {
            spoilers["images"].push(detalle.S);
        });

        details = {
            "Alerones": alerones,
            "Codigos": codigos,
            "Copete": copete,
            "Espejos": espejos,
            "Estribos": estribos,
            "Extintor": extintor,
            "Facia": facia,
            "Gobernado": gobernado,
            "Llantas": llantas,
            "Loderas": loderas,
            "Parabrisas": parabrisas,
            "Regobernado": regobernado,
            "Spoilers": spoilers,
        }

        if (data.LastEvaluatedKey) {
            dynamo.query({
                TableName: 'Order-Details',
                ProjectionExpression: 'Alerones, Codigos, Copete, Espejos, Estribos, Extintor, Facia, Gobernado, Llantas, Loderas, Parabrisas, ReceptionId, Regobernado, Spoilers',
                KeyConditionExpression: 'ReceptionId = :id',
                ExpressionAttributeValues: { ':id': { S: id } },
                ExclusiveStartKey: data.LastEvaluatedKey
            }, function (err, data) {
                loadDetails(err, data, id, details, callback);
            });
        }
        else {
            loadReceptionOrder(id, details, callback);
        }
    } else {
        callback(err);
    }
}

function loadReceptionOrder(id, details, callback) {
    dynamo.query({
        TableName: 'Reception-Order',
        Select: 'ALL_ATTRIBUTES',
        KeyConditionExpression: 'ReceptionId = :id',
        ExpressionAttributeValues: { ':id': { S: id } }
    }, function (err, data) {
        if (err === null) {

            callback(null, {
                id: id,
                details: details
            });
        } else {
            callback(err);
        }
    });
}