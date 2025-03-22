export interface Crime{
    "name": string,
    "type": string,
    "severity": string,
    "coordinates": {"lat": string,
    "lon": string},
    "location": string,
    "address": {
      "street": {
        "number": number,
        "name": string
      },
      "city": string,
      "state":string,
      "zipcode": string,
      "country": string
    },
    "description": string,
    "datetime": string
  }

  