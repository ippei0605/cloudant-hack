'use strict';

const
    databaseName = 'answer_store',
    Cloudant = require('@cloudant/cloudant'),
    cloudant = new Cloudant({
        url: 'https://47c4d5d2-e23d-4649-998e-c2a58b2874ae-bluemix:51dcab16ff1f079a01a260e12a1928f5c3e9de5f15384f5758caffe70b2225e2@47c4d5d2-e23d-4649-998e-c2a58b2874ae-bluemix.cloudant.com',
        maxAttempt: 5,
        plugins: {
            retry: {
                retryStatusCodes: [429]
            }
        }
    });

function createDatabase () {
    return new Promise((resolve, reject) => {
        try {
            cloudant.db.create(databaseName, (error, value) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(value);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}

createDatabase()
    .then(v => {
        console.log(JSON.stringify(v, undefined, 2));
    })
    .catch(e => {
        console.log('error:', e);
    });
