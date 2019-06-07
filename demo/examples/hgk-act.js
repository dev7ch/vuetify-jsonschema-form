module.exports = {
  title: 'HGK ACT Submission Form',
  schema: {
    '$id': 'https://example.com/person.schema.json', // Path to defined Schemo or api response
    '$schema': 'http://json-schema.org/draft-07/schema#',
    title: 'ACT',
    description: 'JSON Schema template example for https://ba14ns21403.fhnw.ch/mediaserver/app/upload/act.php',
    type: 'object',
    allOf: [
      { $ref: '#/definitions/performanceEntity' },
      { $ref: '#/definitions/personEntity' },
      { $ref: '#/definitions/eventEntity' }],
    properties: {
      type: {
        type: 'string',
        const: 'act-template'
      },
      title: {
        'type': 'string',
        'description': "The person's last name.",
        'x-itemClass': 'md3 xs12'
      },
      event: {
        type: 'array',
        title: 'Event',
        format: 'group',
        items: {
          $ref: '#/definitions/eventEntity'
        }
      }
    },
    definitions: {
      eventEntity: {
        title: 'Event Details',
        description: "dshjfljsdhlfjhsdlkfhjlsdjf",
        type: 'object',
        format: 'inline',
        properties: {
          organiser: {
            type: 'string',
            description: 'sdfgsdfhsdfhjgkjdfhgkjh',
            'x-itemClass': 'md6 lg3 xs12'
          },
          location: {
            type: 'string',
            'x-itemClass': 'md6 lg3 xs12',
          },
          date_start: {
            'x-itemClass': 'xs6',
            type: 'string',
            format: 'date'
          },
          date_end: {
            'x-itemClass': 'xs6',
            type: 'string',
            format: 'date'
          }
        }
      },
      'veggie': {
        'type': 'object',
        'required': [ 'veggieName', 'veggieLike' ],
        'properties': {
          'veggieName': {
            'type': 'string',
            'description': 'The name of the vegetable.'
          },
          'veggieLike': {
            'type': 'boolean',
            'description': 'Do I like this vegetable?'
          }
        }
      },
      performanceEntity: {
        title: 'Main infos',
        properties: {
          address: {
            type: 'string',
            maxLength: 2000
          },
          'credit_card': { 'type': 'number' }
        },
        'dependencies': {
          'credit_card': {
            'properties': {
              'billing_address': { 'type': 'string' }
            },
            'required': ['billing_address']
          }
        }
      },
      personEntity: {
        title: 'Social media',
        properties: {
          twitter: {
            type: 'string'
          },
          facebook: {
            type: 'string'
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
    'vegetables': [
      {
        'veggieName': 'potato',
        'veggieLike': true
      },
      {
        'veggieName': 'broccoli',
        'veggieLike': false
      }
    ],
  }
}
