import ownCloud from '../../owncloud/owncloud'

describe('My First Test', function () {

    var owncloudURL = "http://127.0.0.1:8888/"
    let username = "admin"
    let password = "admin"

// LIBRARY INSTANCE
    var oc;

    beforeEach(function (done) {
        oc = new ownCloud(owncloudURL);
        oc.login(username, password).then(status => {
            expect(status).toEqual({id: 'admin', 'display-name': 'admin', email: {}});
            done();
        }).catch(error => {
            expect(error).toBe(null);
            done();
        });
    });

    it('checking method : list with 2 depth', function (done) {
        oc.files.list(testFolder, 2).then(files => {
            expect(typeof(files)).toBe('object');
            expect(files.length).toEqual(7);
            expect(files[3].getName()).toEqual('subdir');
            expect(files[4].getPath()).toEqual(testFolder + '/' + 'subdir/');
            done();
        }).catch(error => {
            expect(error).toBe(null);
            done();
        });
    });
})
