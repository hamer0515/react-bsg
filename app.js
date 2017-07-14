var express = require('express')
var dateFormat = require('dateformat-util');
var app = express();

var data ={};

    app.get('/products', function (req, res) {
        data = {
            data: {
                activitys: [
                    {
                        allTags: ['b'],
                        eventDate: dateFormat.format(new Date(), 'M/d/yyyy'),
                        type: 'MeetingBean',
                        createdDate: dateFormat.format(new Date(), 'M/d/yyyy'),
                        modifiedDate: dateFormat.format(new Date(), 'M/d/yyyy hh:mm:ss'),
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
                        noteId: '11128',
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
                        allTags: ['a'],
                        eventDate: dateFormat.format(new Date(), 'M/d/yyyy'),
                        type: '',
                        createdDate: dateFormat.format(new Date(), 'M/d/yyyy'),
                        modifiedDate: dateFormat.format(new Date(), 'M/d/yyyy hh:mm:ss'),
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
                        noteId: '11130',
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
                dtDateFormat: 'M/d/yyyy hh:mm:ss',
                dateFormat: 'M/d/yyyy',
                pageLimit: 10
            }
        };
        res.json(data);
    });

app.get('/delete/:noteId', function (req, res) {
    data.data.activitys = data.data.activitys.filter((activity, index) => {
        console.log(" activity.noteId " + activity.noteId);
        console.log(" req.params.noteId " + req.params.noteId);
        return activity.noteId != req.params.noteId;
    });
    res.json(data)
});

var server = app.listen(3001, function () {
    console.log('listening on port %d', server.address().port);
})