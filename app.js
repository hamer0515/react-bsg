var express = require('express')
var dateFormat = require('dateformat-util');
var app = express();

var data = {
    data: {
        activitys: [
            {
                allTags:['b'],
                eventDate: dateFormat.format(new Date(), 'MM/dd/yyyy'),
                type:'MeetingBean',
                createdDate: dateFormat.format(new Date(), 'MM/dd/yyyy'),
                modifiedDate: dateFormat.format(new Date(), 'MM/dd/yyyy hh:mm:ss'),
                author: 'Erin Hannon',
                'attachTo': 'Wang',
                'permittedTo': 'Dan',
                iconName: 'note_c',
                eventEntityType: 'NoteBean',
                flowThrough: false,
                description: 'test',
                title: 'test1',
                isImportant: true,
                linkUrl: 'http://172.16.32.100:8080/backstop/crm/DisplayNote.action?noteId=11128',
                noteId: 1,
                draft: true,
                attachTo: 'Farnsworth, Hubert J',
                attachToLink: 'http://172.16.32.100:8080/backstop/crm/ManageContacts.action?display=&viewType=summary&party_id=786593',
                toReview: 'Omega Test Environment SuperAdmin; Keaye, Fizz',
                viewLink: 'http://172.16.32.100:8080/backstop/crm/DisplayNote.action?noteId=11128',
                haveModiifyPermission: true,
                modifyLink: 'http://172.16.32.100:8080/backstop/crm/note.do?ACTION=edit&noteId=11128',
                haveDeletePermisssion: true,
                haveFullPermission: true,
                deleteLink: 'http://172.16.32.100:8080/backstop/crm/note.do?ACTION=ajax_delete&noteId=11128',
                historyLink: 'http://172.16.32.100:8080/backstop/crm/auditRecordsSummary.jsp?auditEntityType=NoteBean&auditEntityId=11128'
            }, {
                allTags:['a'],
                eventDate: dateFormat.format(new Date(), 'MM/dd/yyyy'),
                type:'',
                createdDate: dateFormat.format(new Date(), 'MM/dd/yyyy'),
                modifiedDate: dateFormat.format(new Date(), 'MM/dd/yyyy hh:mm:ss'),
                author: 'bsg2',
                'attachTo': 'Wang',
                'permittedTo': 'Dan',
                iconName: 'note_c',
                eventEntityType: 'NoteBean',
                flowThrough: true,
                description: 'test test test test test test test test test test test test test test test test test test test test',
                title: 'test',
                isImportant: false,
                linkUrl: 'http://172.16.32.100:8080/backstop/crm/DisplayNote.action?noteId=11130',
                noteId: 2,
                draft: true,
                attachTo: 'Farnsworth, Hubert J',
                attachToLink: 'http://172.16.32.100:8080/backstop/crm/ManageContacts.action?display=&viewType=summary&party_id=786593',
                toReview: 'Omega Test Environment SuperAdmin; Keaye, Fizz',
                viewLink: 'http://172.16.32.100:8080/backstop/crm/DisplayNote.action?noteId=11088',
                haveModiifyPermission: true,
                modifyLink: 'http://172.16.32.100:8080/backstop/crm/note.do?ACTION=edit&noteId=11088',
                haveDeletePermisssion: true,
                haveFullPermission: true,
                deleteLink: 'http://172.16.32.100:8080/backstop/crm/note.do?ACTION=ajax_delete&noteId=11088',
                historyLink: 'http://172.16.32.100:8080/backstop/crm/auditRecordsSummary.jsp?auditEntityType=NoteBean&auditEntityId=11088'
            }
        ],
        dtDateFormat: 'dd/MM/yyyy hh:mm:ss',
        dateFormat: 'dd/MM/yyyy',
        pageLimit: 10

    }
}

var data2 = {
    data: {
        activitys: [
            {
                allTags:['a', 'b'],
                eventDate: dateFormat.format(new Date(), 'dd/MM/yyyy'),
                type:'',
                createdDate: dateFormat.format(new Date(), 'dd/MM/yyyy'),
                modifiedDate: dateFormat.format(new Date(), 'dd/MM/yyyy hh:mm:ss'),
                author: 'bsg2',
                'attachTo': 'Wang',
                'permittedTo': 'Dan',
                iconName: 'note_c',
                eventEntityType: 'NoteBean',
                flowThrough: false,
                description: 'test test test test test test test test test test test test test test test test test test test test sjdklasdjskdjskajdsa' +
                    'ksdjkljsadlkdjsakldsjakljadslk',
                title: 'test',
                isImportant: false,
                linkUrl: 'http://172.16.32.100:8080/backstop/crm/DisplayNote.action?noteId=11130',
                noteId: 2,
                draft: true,
                attachTo: 'Farnsworth, Hubert J jksadj asdjksajd adsjkdsjkadsj dasjkdsjk ',
                attachToLink: 'http://172.16.32.100:8080/backstop/crm/ManageContacts.action?display=&viewType=summary&party_id=786593',
                toReview: 'Omega Test Environment SuperAdmin; Keaye, Fizz',
                viewLink: 'http://172.16.32.100:8080/backstop/crm/DisplayNote.action?noteId=11088',
                haveModiifyPermission: true,
                modifyLink: 'http://172.16.32.100:8080/backstop/crm/note.do?ACTION=edit&noteId=11088',
                haveDeletePermisssion: true,
                haveFullPermission: true,
                deleteLink: 'http://172.16.32.100:8080/backstop/crm/note.do?ACTION=ajax_delete&noteId=11088',
                historyLink: 'http://172.16.32.100:8080/backstop/crm/auditRecordsSummary.jsp?auditEntityType=NoteBean&auditEntityId=11128'
            }
        ],
        dtDateFormat: 'dd/MM/yyyy hh:mm:ss',
        dateFormat: 'dd/MM/yyyy',
        pageLimit: 10

    }
}
app.get('/products', function (req, res) {
    res.json(data);
});

app.get('/delete', function (req, res) {
    res.json(data2);
});

var server = app.listen(3001, function () {
    console.log('listening on port %d', server.address().port);
})