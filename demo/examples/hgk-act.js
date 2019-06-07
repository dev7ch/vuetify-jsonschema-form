module.exports = {
  title: 'HGK ACT Submission Form',
  schema: {
    '$id': 'https://example.com/person.schema.json', // Path to defined Schemo or api response
    '$schema': 'http://json-schema.org/draft-07/schema#',
    title: 'ACT',
    description: 'Schema template example for <a href="https://ba14ns21403.fhnw.ch/mediaserver/app/upload/act.php">this From</a>',
    type: 'object',
    allOf: [
      { $ref: '#/definitions/performanceEntity' }
    ],
    properties: {
      type: {
        type: 'string',
        const: 'act-template'
      },
      title: {
        'type': 'string',
        'title': 'Performance Title',
        'x-itemClass': 'md7 xs12'
      },
      event: {
        type: 'array',
        title: null,
        format: 'group',
        items: {
          $ref: '#/definitions/eventEntity'
        }
      },
      persons: {
        type: 'array',
        title: 'Persons',
        description: 'A list of vegetables as editable objects.',
        items: { '$ref': '#/definitions/personEntity' }
      },
      work: {
        type: 'array',
        title: null,
        format: 'group',
        items: {
          $ref: '#/definitions/eventEntity'
        }
      }
    },
    definitions: {
      eventEntity: {
        title: 'Event Details',
        description: 'Lorem ipsum ...',
        type: 'object',
        format: 'inline',
        properties: {
          organiser: {
            type: 'string',
            title: 'Organizer',
            'x-icon': 'account_balance',
            'x-itemClass': 'xs12 md7'
          },
          year: {
            'x-itemClass': 'xs12 md5',
            title: 'Year',
            type: 'string',
            format: 'year'
          },
          location: {
            title: 'Venue',
            type: 'string',
            description: 'Where is this Event?',
            'x-itemClass': 'xs12 md7'
          }
        }
      },
      personEntity: {
        type: 'object',
        title: 'Person Details',
        format: 'inline',
        'required': [ 'lastName', 'email', 'fromEnum' ],
        'properties': {
          'firstName': {
            'type': 'string',
            'x-itemClass': 'xs12 md6'
          },
          'lastName': {
            'type': 'string',
            'x-itemClass': 'xs12 md6'
          },
          'email': {
            'type': 'string',
            'x-itemClass': 'xs12 md6'
          },
          'email2': {
            'type': 'string',
            'x-itemClass': 'xs12 md6'
          },
          fromOneOf: {
            title: 'Role',
            type: 'string',
            'x-itemClass': 'xs12 md6',
            description: 'Select the Role of the Person',
            oneOf: [
              {
                const: 'artist',
                title: 'Artist'
              },
              {
                const: 'involved',
                title: 'Performer Involved'
              },
              {
                const: 'docu',
                title: 'Documentalist'
              },
              {
                const: 'feedback',
                title: 'Feedback'
              },
              {
                const: 'mentor',
                title: 'Feedback'
              },
              {
                const: 'group_mentor',
                title: 'Group Mentor'
              }
            ]
          },
          website: {
            'type': 'string',
            'x-itemClass': 'xs12 md6'
          }
        }
      },
      performanceEntity: {
        title: 'Work',
        description: 'Details and meta data about this Work.',
        properties: {
          description: {
            title: 'Idea/Description',
            type: 'string',
            maxLength: 2000
          },
          tags: {
            type: 'array',
            description: 'This is a simple array of strings',
            items: {
              type: 'string'
            }
          }
        },
        'dependencies': {
          'credit_card': {
            'properties': {
              'billing_address': { 'type': 'string' }
            },
            'required': ['billing_address']
          }
        }
      }
    }
  },
  data: {
    presentation: 'lorem ipsum',
    twitter: 'koumoul_fr',
    type: 'physicalPerson',
    firstName: 'Alban',
    lastName: 'Mouton',
    event: [{}],
    persons: [{}]
  }
}
