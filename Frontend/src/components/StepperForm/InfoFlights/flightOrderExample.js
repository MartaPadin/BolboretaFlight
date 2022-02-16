const flightOrder = {
  data: {
    type: 'flight-order',
    id: 'MlpZVkFMfFdBVFNPTnwyMDE1LTExLTAy',
    queuingOfficeId: 'NCE1A0950',
    associatedRecords: [
      {
        reference: '2ZYVAL',
        creationDateTime: '2018-07-13T20:17:00',
        originSystemCode: '1A',
        flightOfferId: '1',
      },
    ],
    travelers: [
      {
        id: '1',
        dateOfBirth: '1982-01-16',
        name: {
          firstName: 'STEPHANE',
          lastName: 'MARTIN',
        },
        contact: {
          phones: [
            {
              countryCallingCode: '33',
              number: '487692704',
            },
          ],
        },
        documents: [
          {
            documentType: 'PASSPORT',
            number: '012345678',
            expiryDate: '2009-04-14',
            issuanceCountry: 'GB',
            nationality: 'GB',
            holder: true,
          },
        ],
      },
      {
        id: '3',
        dateOfBirth: '2018-03-24',
        name: {
          firstName: 'JULES',
          lastName: 'MARTIN',
        },
      },
      {
        id: '2',
        dateOfBirth: '2007-10-11',
        name: {
          firstName: 'EMILIE',
          lastName: 'MARTIN',
        },
      },
    ],
    flightOffers: [
      {
        id: '1',
        type: 'flight-offer',
        source: 'GDS',
        itineraries: [
          {
            duration: 'PT2H',
            segments: [
              {
                id: '1',
                duration: 'PT2H',
                aircraft: {
                  code: '320',
                },
                numberOfStops: 0,
                blacklistedInEU: false,
                carrierCode: 'IB',
                operating: {
                  carrierCode: 'IB',
                },
                number: '3403',
                departure: {
                  at: '2018-09-22T10:15:00',
                  terminal: 'W',
                  iataCode: 'ORY',
                },
                arrival: {
                  at: '2018-09-22T12:15:00',
                  terminal: '4',
                  iataCode: 'MAD',
                },
                co2Emissions: [
                  {
                    weight: '100',
                    weightUnit: 'KG',
                    cabin: 'ECONOMY',
                  },
                ],
              },
            ],
          },
          {
            duration: 'PT1H20M',
            segments: [
              {
                id: '20',
                duration: 'PT1H20M',
                aircraft: {
                  code: '320',
                },
                numberOfStops: 0,
                blacklistedInEU: false,
                carrierCode: 'IB',
                operating: {
                  carrierCode: 'IB',
                },
                number: '3118',
                departure: {
                  at: '2018-09-26T23:05:00',
                  terminal: '4',
                  iataCode: 'MAD',
                },
                arrival: {
                  at: '2018-09-26T23:25:00',
                  terminal: '1',
                  iataCode: 'LIS',
                },
                co2Emissions: [
                  {
                    weight: '100',
                    weightUnit: 'KG',
                    cabin: 'ECONOMY',
                  },
                ],
              },
            ],
          },
          {
            duration: 'PT4H30M',
            segments: [
              {
                id: '30',
                duration: 'PT2H',
                aircraft: {
                  code: '320',
                },
                numberOfStops: 0,
                blacklistedInEU: false,
                carrierCode: 'IB',
                operating: {
                  carrierCode: 'IB',
                },
                number: '3109',
                departure: {
                  at: '2018-10-04T12:35:00',
                  terminal: '1',
                  iataCode: 'LIS',
                },
                arrival: {
                  at: '2018-10-04T14:55:00',
                  terminal: '4',
                  iataCode: 'MAD',
                },
                co2Emissions: [
                  {
                    weight: '100',
                    weightUnit: 'KG',
                    cabin: 'ECONOMY',
                  },
                ],
              },
              {
                id: '31',
                duration: 'PT2H30M',
                aircraft: {
                  code: '320',
                },
                numberOfStops: 0,
                blacklistedInEU: false,
                carrierCode: 'IB',
                operating: {
                  carrierCode: 'IB',
                },
                number: '3444',
                departure: {
                  at: '2018-10-04T16:05:00',
                  terminal: '4',
                  iataCode: 'MAD',
                },
                arrival: {
                  at: '2018-10-04T18:05:00',
                  terminal: 'W',
                  iataCode: 'ORY',
                },
                co2Emissions: [
                  {
                    weight: '100',
                    weightUnit: 'KG',
                    cabin: 'ECONOMY',
                  },
                ],
              },
            ],
          },
        ],
        price: {
          grandTotal: '689.21',
          total: '423.21',
          base: '242.00',
          currency: 'EUR',
          billingCurrency: 'EUR',
          fees: [
            {
              type: 'SUPPLIER',
              amount: '0',
            },
            {
              type: 'FORM_OF_PAYMENT',
              amount: '6',
            },
            {
              type: 'TICKETING',
              amount: '0',
            },
          ],
          additionalServices: [
            {
              type: 'CHECKED_BAGS',
              amount: '100',
            },
            {
              type: 'SEATS',
              amount: '166',
            },
          ],
        },
        pricingOptions: {
          fareType: ['PUBLISHED'],
          includedCheckedBags: false,
        },
        validatingAirlineCodes: ['IB'],
        travelerPricings: [
          {
            travelerId: '1',
            fareOption: 'STANDARD',
            travelerType: 'ADULT',
            price: {
              currency: 'EUR',
              total: '200.94',
              base: '126',
              taxes: [
                {
                  code: 'YQ',
                  amount: '0.94',
                },
                {
                  code: 'CJ',
                  amount: '41.67',
                },
                {
                  code: 'FR',
                  amount: '31.33',
                },
              ],
            },
            fareDetailsBySegment: [
              {
                segmentId: '1',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
              {
                segmentId: '20',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
              {
                segmentId: '30',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
              {
                segmentId: '31',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
            ],
          },
          {
            travelerId: '2',
            fareOption: 'STANDARD',
            travelerType: 'CHILD',
            price: {
              currency: 'EUR',
              total: '180.94',
              base: '106',
              taxes: [
                {
                  code: 'YQ',
                  amount: '0.94',
                },
                {
                  code: 'CJ',
                  amount: '41.67',
                },
                {
                  code: 'FR',
                  amount: '31.33',
                },
              ],
            },
            fareDetailsBySegment: [
              {
                segmentId: '1',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
                additionalServices: {
                  chargeableCheckedBags: {
                    quantity: 1,
                    weight: 20,
                  },
                  chargeableSeatNumber: '33D',
                },
              },
              {
                segmentId: '20',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
                additionalServices: {
                  chargeableCheckedBags: {
                    quantity: 1,
                    weight: 20,
                  },
                  chargeableSeatNumber: '28A',
                },
              },
              {
                segmentId: '30',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
                additionalServices: {
                  chargeableCheckedBags: {
                    quantity: 1,
                    weight: 20,
                  },
                  chargeableSeatNumber: '12C',
                },
              },
              {
                segmentId: '31',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
                additionalServices: {
                  chargeableCheckedBags: {
                    quantity: 1,
                    weight: 20,
                  },
                  chargeableSeatNumber: '33D',
                },
              },
            ],
          },
          {
            travelerId: '3',
            fareOption: 'STANDARD',
            travelerType: 'HELD_INFANT',
            associatedAdultId: '1',
            price: {
              currency: 'EUR',
              total: '41.33',
              base: '10',
              taxes: [
                {
                  code: 'FR',
                  amount: '31.33',
                },
              ],
            },
            fareDetailsBySegment: [
              {
                segmentId: '1',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
              {
                segmentId: '20',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
              {
                segmentId: '30',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
              {
                segmentId: '31',
                cabin: 'ECONOMY',
                fareBasis: 'ANNNNF4K',
                brandedFare: 'LIGHTONE',
                class: 'A',
                isAllotment: true,
                allotmentDetails: {
                  tourName: 'tour',
                  tourReference: 'ref',
                },
                sliceDiceIndicator: 'ABCDEF',
                includedCheckedBags: {
                  quantity: 0,
                },
              },
            ],
          },
        ],
      },
    ],
    ticketingAggreement: {
      option: 'DELAY_TO_CANCEL',
      dateTime: '2018-08-21T10:15:00.000',
    },
    contacts: [
      {
        companyName: 'AMADEUS',
        purpose: 'STANDARD',
        phones: [
          {
            deviceType: 'FAX',
            countryCallingCode: '33',
            number: '480080070',
          },
          {
            deviceType: 'LANDLINE',
            countryCallingCode: '33',
            number: '480080070',
          },
        ],
        emailAddress: 'support@mail.com',
        address: {
          lines: ['485 route du Pin Montard'],
          postalCode: '06902',
          cityName: 'Sophia Antipolis Cedex',
          countryCode: 'FR',
        },
      },
    ],
  },
  dictionaries: {
    locations: {
      CDG: {
        cityCode: 'PAR',
        countryCode: 'FR',
      },
      ORY: {
        cityCode: 'PAR',
        countryCode: 'FR',
      },
      MAD: {
        cityCode: 'MAD',
        countryCode: 'ES',
      },
    },
  },
};

export default flightOrder;
