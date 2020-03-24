const machines = [
  {
    id: '372b936b-d036-4f68-b5e7-ca85b79df3e0',
    name: 'Machine A',
    sensors: [
      {
        name: 'Sensor A',
        sensorDataPoints: [
          {
            timestamp: '2020-01-24T21:15:31.145Z',
            value: 2.3
          },
          {
            timestamp: '2020-01-24T21:15:31.146Z',
            value: 2.5
          },
        ],
      },
      {
        id: 'e9b182b4-30ca-47dd-84a9-05ca781bc3b7',
        name: 'Sensor B',
        sensorDataPoints: [
          {
            timestamp: '2020-02-24T21:15:31.145Z',
            value: 2.8
          },
          {
            timestamp: '2020-02-24T21:15:31.146Z',
            value: 6.4
          },
        ],
      },
    ],
  },
  {
    id: 'ad383231-8505-4633-bea6-b63f8ee52f55',
    name: 'Machine B',
    sensors: [
      {
        id: 'be0fcd68-46a8-423f-ae0a-c88dec6e0f1a',
        name: 'Sensor C',
        sensorDataPoints: [
          {
            timestamp: '2020-01-24T21:15:31.145Z',
            value: 2.3
          },
          {
            timestamp: '2020-03-24T21:15:31.146Z',
            value: 2.5
          },
        ],
      },
      {
        id: '066d5825-1700-40a1-a0d2-c58ff86d1f4b',
        name: 'Sensor D',
        sensorDataPoints: [
          {
            timestamp: '2020-03-20T21:15:31.145Z',
            value: 4.3
          },
          {
            timestamp: '2020-03-29T21:15:31.146Z',
            value: 2.5
          },
        ],
      },
    ],
  },
  {
    id: '1a7e61b8-80d1-49a0-aa57-ea7555878ac3',
    name: 'Machine C',
    sensors: [
      {
        id: '40a3e944-27d5-49fb-a34e-69948fe680e1',
        name: 'Sensor E',
        sensorDataPoints: [
          {
            timestamp: '2020-01-12T21:15:31.145Z',
            value: 2.3
          },
          {
            timestamp: '2020-03-13T21:15:31.146Z',
            value: 7.5
          },
        ],
      },
      {
        id: '4a2655c5-5e19-4d16-a457-0b13c1203381',
        name: 'Sensor F',
        sensorDataPoints: [
          {
            timestamp: '2020-03-10T21:15:31.145Z',
            value: 5.3
          },
          {
            timestamp: '2020-02-27T21:15:31.146Z',
            value: 2.7
          },
        ],
      },
    ],
  },
  {
    id: '9bf2b072-8021-4482-a5ea-c50945a40cea',
    name: 'Machine D',
    sensors: [
      {
        id: 'b8cccce5-efb8-467c-ad8a-b4102c134217',
        name: 'Sensor G',
        sensorDataPoints: [
          {
            timestamp: '2020-03-24T21:15:31.145Z',
            value: 2.3
          },
          {
            timestamp: '2020-03-24T21:15:31.146Z',
            value: 2.5
          },
        ],
      },
      {
        id: '27b85bf0-736d-4777-8976-119499e5c802',
        name: 'Sensor H',
        sensorDataPoints: [
          {
            timestamp: '2020-03-24T21:15:31.145Z',
            value: 2.3
          },
          {
            timestamp: '2020-03-24T21:15:31.146Z',
            value: 2.5
          },
        ],
      },
    ],
  },
  {
    id: 'c9232313-c66c-4a86-bbbd-a8b10fe6b48a',
    name: 'Machine E',
    sensors: [
      {
        id: '17712556-3eb0-44e3-8ea7-b4abdc3dd384',
        name: 'Sensor I',
        sensorDataPoints: [
          {
            timestamp: '2020-03-24T21:15:31.145Z',
            value: 2.3
          },
          {
            timestamp: '2020-03-24T21:15:31.146Z',
            value: 2.5
          },
        ],
      },
      {
        id: 'e47d677c-2017-469f-bc63-d502d16604b1',
        name: 'Sensor J',
        sensorDataPoints: [
          {
            timestamp: '2020-03-24T21:15:31.145Z',
            value: 2.3
          },
          {
            timestamp: '2020-03-24T21:15:31.146Z',
            value: 2.5
          },
        ],
      },
    ],
  }
];

exports.machines = machines;