export const FIXTURE_ELASTICSEARCH_DEALS = [
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': '4222ad753f914e20a4f7d63e5c4b35c0',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0',
      'DealId': '4222ad753f914e20a4f7d63e5c4b35c0',
      'SerialNumber': '9991.QA',
      'DealKey': 'TEST191130B',
      'DealType': 'Finance',
      'UserRoles': [
        {
          EmployeeRef: 'f19f6d1809ac4b8b9926535c63c24c30',
          Name: 'MARK HECKEL',
          Primary: true,
          Role: 'SalesManager'
        },
        {
          EmployeeRef: 'b1bc1e6c855f44f685fbba18baa0febe',
          Name: 'NARAYANAN KUTTY',
          Primary: true,
          Role: 'BusinessManager'
        }
      ],
      'CreationDate': '2019-12-01T03:12:20.7570000Z',
      'ContractDate': '2019-11-30T07:00:00.0000000Z',
      'PaymentDate': '2019-12-30T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 33145,
      'BuyerRef': '117a7a64ccc74ab1aed0584ad947d46d',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-01T03:13:48.6500000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 16.83,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [
        {
          'Name': 'Fabric Protector MS2 New',
          'Price': 895,
          'Cost': 0,
          'Capitalized': true
        }
      ],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [
        {
          'VehicleRef': 'e5a11d445ab94b29be5bcf826957164c',
          'Allowance': 14000,
          'Lien': 16000,
          'Capitalized': 14000,
          'Upfront': -16000,
          'ActualCashValue': 14000,
          'Odometer': 25000,
          'LienHolder': []
        }
      ],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': 'd5a530935606474aa51c8dab0c5fb163',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0,
          'StockNumber': 'M464621'
        },
        {
          'VehicleRef': '87f13aa628674ccdaca91a650e52c4c4',
          'IsNewVehicle': false,
          'SaleOdometer': 0,
          'Cost': 0,
          'StockNumber': 'M464621'
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 31490,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 1.99,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 37167.23,
        'FinanceCharges': 1910.77,
        'TotalBalanceDue': 39078,
        'PaymentBase': -352.85,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 1004.15
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 651.3,
        'Term': 0,
        'APR': 1.99
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 33145,
        'AccessoryGross': 0,
        'FinanceGross': 911.83,
        'DealGross': 34056.83,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 1.99
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': 'c7f0e8729a8941c48fd33feb8cda74da',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/c7f0e872-9a89-41c4-8fd3-3feb8cda74da',
      'DealId': 'c7f0e8729a8941c48fd33feb8cda74da',
      'SerialNumber': '9991.QA',
      'DealKey': 'TEST191130C',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-01T03:16:12.9930000Z',
      'ContractDate': '2019-11-30T07:00:00.0000000Z',
      'PaymentDate': '2019-12-30T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 33145,
      'BuyerRef': '117a7a64ccc74ab1aed0584ad947d46d',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-01T03:16:51.1270000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 16.83,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [
        {
          'Name': 'Fabric Protector MS2 New',
          'Price': 895,
          'Cost': 0,
          'Capitalized': true
        }
      ],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [
        {
          'VehicleRef': '308944a0549345c2bbc6f00eb9453c3c',
          'Allowance': 14000,
          'Lien': 16000,
          'Capitalized': 14000,
          'Upfront': -16000,
          'ActualCashValue': 14000,
          'Odometer': 62000,
          'LienHolder': []
        }
      ],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': 'd835f368c3414c3596136944a38d9526',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        },
        {
          'VehicleRef': '63569c752a804878a9c593a79d9cc7a0',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 31490,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 1.99,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 37167.23,
        'FinanceCharges': 1910.77,
        'TotalBalanceDue': 39078,
        'PaymentBase': -352.85,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 1004.15
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 651.3,
        'Term': 0,
        'APR': 1.99
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 33145,
        'AccessoryGross': 0,
        'FinanceGross': 911.83,
        'DealGross': 34056.83,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 1.99
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': '2f3c359adeeb4e6b84712003f5c82da1',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/2f3c359a-deeb-4e6b-8471-2003f5c82da1',
      'DealId': '2f3c359adeeb4e6b84712003f5c82da1',
      'SerialNumber': '9991.QA',
      'DealKey': 'TEST191201',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-01T17:38:25.1270000Z',
      'ContractDate': '2019-12-01T07:00:00.0000000Z',
      'PaymentDate': '2019-12-31T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 33145,
      'BuyerRef': '117a7a64ccc74ab1aed0584ad947d46d',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-01T17:38:28.8400000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 16.83,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [
        {
          'Name': 'Fabric Protector MS2 New',
          'Price': 895,
          'Cost': 0,
          'Capitalized': true
        }
      ],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': '3cedd0823e774d7888f966f36460a904',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 31490,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 1.99,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 35867.23,
        'FinanceCharges': 1843.97,
        'TotalBalanceDue': 37711.2,
        'PaymentBase': -1075.63,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 1704.15
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 628.52,
        'Term': 0,
        'APR': 1.99
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 33145,
        'AccessoryGross': 0,
        'FinanceGross': 911.83,
        'DealGross': 34056.83,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 1.99
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': '44bece27c79b41d9afd003e7d975c8c1',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/44bece27-c79b-41d9-afd0-03e7d975c8c1',
      'DealId': '44bece27c79b41d9afd003e7d975c8c1',
      'SerialNumber': '9991.QA',
      'DealKey': 'TEST191201A',
      'DealType': 'Finance',
      'UserRoles': [
        {
          'EmployeeRef': '00eef09957d9472a9ed979c60efa0c9d',
          'Name': 'Kenneth Parker',
          'Primary': true,
          'Role': 'SalesManager'
        },
        {
          'EmployeeRef': '686b78d25def4f2ca412123d95604944',
          'Name': 'Janet Murray',
          'Primary': true,
          'Role': 'SalesRep'
        }
      ],
      'CreationDate': '2019-12-01T17:50:33.2330000Z',
      'ContractDate': '2019-12-01T07:00:00.0000000Z',
      'PaymentDate': '2019-12-31T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 33145,
      'BuyerRef': '117a7a64ccc74ab1aed0584ad947d46d',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-01T17:50:34.6470000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 16.83,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [
        {
          'Name': 'Fabric Protector MS2 New',
          'Price': 895,
          'Cost': 0,
          'Capitalized': true
        }
      ],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': '3cedd0823e774d7888f966f36460a904',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 31490,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 1.99,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 35867.23,
        'FinanceCharges': 1843.97,
        'TotalBalanceDue': 37711.2,
        'PaymentBase': -1075.63,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 1704.15
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 628.52,
        'Term': 0,
        'APR': 1.99
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 33145,
        'AccessoryGross': 0,
        'FinanceGross': 911.83,
        'DealGross': 34056.83,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 1.99
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': '5b81149e8815407f8e735a29c9eb433b',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/5b81149e-8815-407f-8e73-5a29c9eb433b',
      'DealId': '5b81149e8815407f8e735a29c9eb433b',
      'SerialNumber': '9991.QA',
      'DealKey': 'TEST191204',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-04T14:25:43.2700000Z',
      'ContractDate': '2019-12-04T07:00:00.0000000Z',
      'PaymentDate': '2020-01-03T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 33145,
      'BuyerRef': '117a7a64ccc74ab1aed0584ad947d46d',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-04T14:27:11.6900000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 16.83,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [
        {
          'Name': 'Fabric Protector MS2 New',
          'Price': 895,
          'Cost': 0,
          'Capitalized': true
        }
      ],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [
        {
          'VehicleRef': 'c37d878848a947e68360b40995738316',
          'VIN': '4S3BMHB67D3009828',
          'Allowance': 10000,
          'Lien': 8000,
          'Capitalized': 10000,
          'Upfront': -8000,
          'ActualCashValue': 10000,
          'Odometer': 170000,
          'LienHolder': []
        }
      ],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': '5d2a89ce4fe247cbb36bc5be643d74c0',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        },
        {
          'VehicleRef': '638b5d3441414a54ae6f7be9c9e308eb',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 31490,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 1.99,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 37517.23,
        'FinanceCharges': 1928.57,
        'TotalBalanceDue': 39445.8,
        'PaymentBase': -696.72,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 1354.15
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 657.43,
        'Term': 0,
        'APR': 1.99
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 33145,
        'AccessoryGross': 0,
        'FinanceGross': 911.83,
        'DealGross': 34056.83,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 1.99
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': '362041d79bc745738e15bf5a42d4a6e3',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/362041d7-9bc7-4573-8e15-bf5a42d4a6e3',
      'DealId': '362041d79bc745738e15bf5a42d4a6e3',
      'SerialNumber': '9991.QA',
      'DealKey': 'TEST191204A',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-04T21:01:48.3630000Z',
      'ContractDate': '2019-12-04T07:00:00.0000000Z',
      'PaymentDate': '2020-01-03T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 33145,
      'BuyerRef': '117a7a64ccc74ab1aed0584ad947d46d',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-04T21:10:19.6900000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 16.83,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [],
      'Rebates': [],
      'Allowances': [
        {
          'Description': 'Test Stack',
          'Amount': 1000
        }
      ],
      'Adjustments': [
        {
          'Description': 'Test Stack',
          'Amount': -5000
        }
      ],
      'Vehicles': [
        {
          'VehicleRef': 'b94f5625102d4d7ab90859f451f48a34',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        },
        {
          'VehicleRef': '7f38e34b89784756a2c6cc093be709f7',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 31490,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 1.99,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 33877.48,
        'FinanceCharges': 1741.52,
        'TotalBalanceDue': 35619,
        'PaymentBase': -1015.75,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 1609.4
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 593.65,
        'Term': 0,
        'APR': 1.99
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 27145,
        'AccessoryGross': 0,
        'FinanceGross': 16.83,
        'DealGross': 27161.83,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 1.99
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': 'a110db52b5044893a9604101e44b292a',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/a110db52-b504-4893-a960-4101e44b292a',
      'DealId': 'a110db52b5044893a9604101e44b292a',
      'SerialNumber': '9991.QA',
      'DealKey': 'TEST191204B',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-04T21:12:58.8430000Z',
      'ContractDate': '2019-12-04T07:00:00.0000000Z',
      'PaymentDate': '2020-01-03T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 33145,
      'BuyerRef': '117a7a64ccc74ab1aed0584ad947d46d',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-04T21:13:00.4630000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 16.83,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [],
      'Rebates': [],
      'Allowances': [
        {
          'Description': 'Test',
          'Amount': 1000
        }
      ],
      'Adjustments': [
        {
          'Description': 'Test',
          'Amount': -1000
        }
      ],
      'Vehicles': [
        {
          'VehicleRef': '218792aeb0034f988221f52f0ed3f7bb',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 31490,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 1.99,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 33877.48,
        'FinanceCharges': 1741.52,
        'TotalBalanceDue': 35619,
        'PaymentBase': -1015.75,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 1609.4
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 593.65,
        'Term': 0,
        'APR': 1.99
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 31145,
        'AccessoryGross': 0,
        'FinanceGross': 16.83,
        'DealGross': 31161.83,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 1.99
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': '4244921a876c4b8faa8a4f3994268b3d',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/4244921a-876c-4b8f-aa8a-4f3994268b3d',
      'DealId': '4244921a876c4b8faa8a4f3994268b3d',
      'SerialNumber': '9991.QA',
      'DealKey': 'BERT191205',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-05T17:45:24.1430000Z',
      'ContractDate': '2019-12-05T07:00:00.0000000Z',
      'PaymentDate': '2020-01-04T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 0,
      'BuyerRef': '498b8190224c47c18cdae40fcfbc4167',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-05T17:45:29.6830000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 399,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': '0c278e1da0e54eb892a2c90d52f14626',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 0,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 0,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 526.51,
        'FinanceCharges': 0,
        'TotalBalanceDue': 526.51,
        'PaymentBase': -12.48,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 21.26
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 8.78,
        'Term': 0,
        'APR': 0
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 0,
        'AccessoryGross': 0,
        'FinanceGross': 399,
        'DealGross': 399,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 0
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': 'a7406fbf7ad249c5adaa7b7ffce39078',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/a7406fbf-7ad2-49c5-adaa-7b7ffce39078',
      'DealId': 'a7406fbf7ad249c5adaa7b7ffce39078',
      'SerialNumber': '9991.QA',
      'DealKey': 'DION191205',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-05T19:05:28.3370000Z',
      'ContractDate': '2019-12-05T07:00:00.0000000Z',
      'PaymentDate': '2020-01-04T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 0,
      'BuyerRef': '5e1f35cbb00f43589799c986e89fee5b',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-05T19:05:30.0530000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 399,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': '9f7f66e8ced9444eafc8fd4a3d147700',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 0,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 0,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 526.51,
        'FinanceCharges': 0,
        'TotalBalanceDue': 526.51,
        'PaymentBase': -12.48,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 21.26
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 8.78,
        'Term': 0,
        'APR': 0
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 0,
        'AccessoryGross': 0,
        'FinanceGross': 399,
        'DealGross': 399,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 0
    }
  },
  {
    '_index': 'deal',
    '_type': '_doc',
    '_id': 'ee468ab690a0493690f510f404215bab',
    '_score': 1,
    '_source': {
      'Id': '9991.qa/ee468ab6-90a0-4936-90f5-10f404215bab',
      'DealId': 'ee468ab690a0493690f510f404215bab',
      'SerialNumber': '9991.QA',
      'DealKey': 'MART191205',
      'DealType': 'Finance',
      'UserRoles': [],
      'CreationDate': '2019-12-05T19:22:31.3270000Z',
      'ContractDate': '2019-12-05T07:00:00.0000000Z',
      'PaymentDate': '2020-01-04T07:00:00.0000000Z',
      'DeliveryDate': '2020-03-13T18:57:37.4000000Z',
      'SystemDeliveryDate': '2020-03-13T19:57:37.4000000Z',
      'DeliveryStepsCompleted': [],
      'Conditions': '',
      'Status': 'Pending',
      'SaleType': 'Retail',
      'TaxCode': 'AB',
      'Notes': '',
      'AmortizationTerm': 60,
      'PaymentTerm': 60,
      'PaymentsPerYear': 12,
      'Price': 0,
      'BuyerRef': 'a39115b96120484bba0480df67a1e859',
      'CoBuyerRefs': [],
      'LastUpdate': '2019-12-05T19:22:33.0670000Z',
      'Fees': [
        {
          'Name': 'Air Recovery Fee',
          'Amount': 0,
          'Capitalized': true
        },
        {
          'Name': 'AMVIC Fee',
          'Amount': 6.25,
          'Capitalized': true
        },
        {
          'Name': 'PPSA',
          'Amount': 80,
          'Capitalized': true
        },
        {
          'Name': 'Registration Fee',
          'Amount': 399,
          'Capitalized': true
        },
        {
          'Name': 'Tire Levy',
          'Amount': 20,
          'Capitalized': true
        }
      ],
      'Accessories': [],
      'Warranties': [],
      'Protections': [],
      'Insurance': [
        {
          'Code': 'MDAAB09',
          'Description': 'CreditLife',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'AccidentHealth',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'LossOfEmployment',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        },
        {
          'Code': 'MDAAB09',
          'Description': 'GAP',
          'Coverage': 'Complete',
          'NumberOfPayments': 60,
          'Premium': 0,
          'Cost': 0,
          'RetroDays': '30RETRO'
        }
      ],
      'Trades': [],
      'Rebates': [],
      'Allowances': [],
      'Adjustments': [],
      'Vehicles': [
        {
          'VehicleRef': 'a9c027d3c54d48bfb36e72ab8e24507a',
          'IsNewVehicle': true,
          'SaleOdometer': 0,
          'Cost': 0
        }
      ],
      'VehicleInsurance': {
        'Collision': 0,
        'Comprehensive': 0,
        'Liability': 0
      },
      'CashInfo': {
        'MSRP': 0,
        'Taxes': [],
        'Deposit': 0,
        'DueOnDelivery': 0
      },
      'FinanceInfo': {
        'MSRP': 0,
        'Deposit': 0,
        'CashOnDelivery': 0,
        'Bank': 'TD FINANCING SERVICES INC',
        'BankInfo': {
          'Code': 'TDFS P',
          'Name': 'TD FINANCING SERVICES INC',
          'Address': 'Liberty Centre, 3500 Steeles Ave East, PO Box 14, Tower 2, Level 6',
          'City': 'Markham',
          'State': 'Ontario',
          'ZipCode': 'L3R 0X1'
        },
        'Rate': 0,
        'PaymentsPerYear': 12,
        'PaymentTerm': 60,
        'AmortizationTerm': 60,
        'Balloon': 0,
        'BalanceToFinance': 526.51,
        'FinanceCharges': 0,
        'TotalBalanceDue': 526.51,
        'PaymentBase': -12.48,
        'PaymentTaxes': [
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Name': 'GST',
            'Rate': 5,
            'Amount': 21.26
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          },
          {
            'Rate': 0,
            'Amount': 0
          }
        ],
        'Payment': 8.78,
        'Term': 0,
        'APR': 0
      },
      'LeaseInfo': {
        'MSRP': 0,
        'CapTaxes': [],
        'CapSettings': [],
        'CapCost': 0,
        'CashOnDelivery': 0,
        'CapReduction': 0,
        'NetLease': 0,
        'ResidualPercent': 0,
        'ResidualAmount': 0,
        'InceptionMilesAllowed': 0,
        'InceptionMileageRate': 0,
        'InceptionMileageIncluded': false,
        'MileageAllowed': 0,
        'MileageExpected': 0,
        'MileageRate': 0,
        'ExcessMileageRate': 0,
        'MileageCharges': 0,
        'ResidualNet': 0,
        'ResidualAdjustment': 0,
        'Depreciation': 0,
        'BankInfo': [],
        'Rate': 0,
        'PaymentsPerYear': 0,
        'PaymentTerm': 0,
        'AmortizationTerm': 0,
        'PaymentBase': 0,
        'PaymentTaxes': [],
        'Payment': 0,
        'UpfrontTaxes': [],
        'SecurityDeposit': 0,
        'DriveOffLease': 0,
        'PayableOnDelivery': 0,
        'Term': 0,
        'APR': 0
      },
      'Gross': {
        'Reserve': {
          'Amount': 0,
          'BaseRate': 0,
          'MidRate': 0,
          'Factor': 0
        },
        'VehicleGross': 0,
        'AccessoryGross': 0,
        'FinanceGross': 399,
        'DealGross': 399,
        'Incentives': 0
      },
      'ProspectRef': '00000000000000000000000000000000',
      'DealTags': [],
      'LeadRef': '',
      'LeadSource': '',
      'LeadType': '',
      'StatusInfo': [],
      'SystemStatus': 'Delivered',
      'DealInterestType': '',
      'CashOnDelivery': 0,
      'APR': 0
    }
  }
]

export const FIXTURE_ELASTICSEARCH_DEALS_RESPONSE = {
  data: FIXTURE_ELASTICSEARCH_DEALS,
  meta: {
    current_page: 1,
    last_page: 38,
    per_page: 30,
    total: 1122
  }
}

export const FIXTURE_ELASTICSEARCH_DEAL = FIXTURE_ELASTICSEARCH_DEALS[0]['_source']

export const FIXTURE_ELASTICSEARCH_DEAL_RESPONSE = {
  data: FIXTURE_ELASTICSEARCH_DEALS[0]['_source']
}

export const FIXTURE_SALES_VISIBILITY = [
  'status',
  'name',
  'customer',
  'age',
  'source',
  'sales_manager',
  'salesrep'
]
