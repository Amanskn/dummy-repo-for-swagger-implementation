/**
 * @swagger
 * /booking_api:
 *   post:
 *      description:  Use to book international shipment
 *      tags:
 *          - Booking API International
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                 - franchisee_id
 *                 - hub_id
 *                 - branch_id
 *                 - user_name
 *                 - password
 *                 - origin_pincode
 *                 - destination_pincode
 *              properties:
 *                  user_name:
 *                      type: string
 *                      example: sahil_saini
 *                  password:
 *                      type: string
 *                      example: 123456
 *                  origin_pincode:
 *                      type: string
 *                      example: 110049
 *                  destination_pincode:
 *                       type: string
 *                       example: 3001
 *                  city:
 *                       type: string
 *                       example: Melbourne
 *                  destination_country_id:
 *                       type: integer
 *                       example: 12
 *                  shipment_type:
 *                       type: integer
 *                       example: 1
 *                  unit:
 *                       type: string
 *                       example: {"weight_unit": "kgs", "length_unit": "cms", "currency": "24"}
 *                  shipment_dimensions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              item_description:
 *                                  type: string
 *                                  example: "First description"
 *                              value:
 *                                  type: string
 *                                  example: "1000"
 *                              quantity:
 *                                  type: string
 *                                  example: "1"
 *                              weight:
 *                                  type: string
 *                                  example: "0.5"
 *                              length:
 *                                  type: string
 *                                  example: "11"
 *                              breadth:
 *                                  type: string
 *                                  example: "11"
 *                              height:
 *                                  type: string
 *                                  example: "2"
 *                              hsn_code:
 *                                  type: string
 *                                  example: "49011010"
 *                  courier_id:
 *                       type: integer
 *                       example: 148
 *                  consigner_first_name:
 *                       type: string
 *                       example: Ajay
 *                  consigner_company_name:
 *                       type: string
 *                       example: sgate
 *                  consigner_mobile_number:
 *                       type: string
 *                       example: 7503089366
 *                  consigner_email_id:
 *                       type: string
 *                       example: ajay@gmail.com
 *                  consigner_address_1:
 *                       type: string
 *                       example: K-99
 *                  consigner_address_2:
 *                       type: string
 *                       example: Budh Vihar
 *                  consigner_city:
 *                       type: string
 *                       example: NEW DELHI
 *                  consigner_pincode:
 *                       type: string
 *                       example: 110049
 *                  consigner_state:
 *                       type: string
 *                       example: Delhi
 *                  consigner_doc_type:
 *                       type: string
 *                       example: 4
 *                  consignee_first_name:
 *                       type: string
 *                       example: Sonu
 *                  consignee_company_name:
 *                       type: string
 *                       example: datamotive
 *                  consignee_mobile_number:
 *                       type: string
 *                       example: 9852777536
 *                  consignee_email_id:
 *                       type: string
 *                       example: sonu@gmail.com
 *                  consignee_address_1:
 *                      type: string
 *                      example: xyz rd vicoria suit melbourne
 *                  consignee_address_2:
 *                      type: string
 *                      example: vicoria rd suit
 *                  booking_invoice_number:
 *                      type: string
 *                      example: 78645
 *                  booking_invoice_date:
 *                      type: string
 *                      example: 2024-07-10
 *                  consigner_gst_number:
 *                      type: string
 *                      example: 987456615215
 *                  consigner_gst_applicable:
 *                      type: string
 *                      example: 2
 *                  consigner_tax_payment:
 *                      type: string
 *                      example: 3
 *                  pickup_required:
 *                      type: integer
 *                      example: 1
 *                  pickup_location:
 *                      type: integer
 *                      example: 2
 *                  pickup_name:
 *                      type: string
 *                      example: ajay
 *                  pickup_address_1:
 *                      type: string
 *                      example: street no 4
 *                  pickup_address_2:
 *                      type: string
 *                      example: near general store
 *                  pickup_pincode:
 *                      type: string
 *                      example: 110049
 *                  pickup_city:
 *                      type: string
 *                      example: NEW DELHI
 *                  pickup_state:
 *                      type: string
 *                      example: Delhi
 *                  pickup_ready_start_time:
 *                      type: string
 *                      example: 11:47 AM
 *                  pickup_ready_end_time:
 *                      type: string
 *                      example: 18:17 PM
 *                  tax_paid:
 *                      type: integer
 *                      example: 1
 *                  tax_amount:
 *                      type: string
 *                      example: 123
 *                  export_type:
 *                      type: string
 *                      example: 3
 *                  consignee_reference_no:
 *                      type: string
 *                      example: 7894564
 *                  consignee_gst_number:
 *                      type: string
 *                      example: 09AAACH7409R1ZZ
 *                  shipper_type:
 *                      type: string
 *                      example: 1
 *                      description: shipper_type is needed if courier is DHL(121). It can be either 1 or 2. ***1 is for individual *** 2 is for msme
 *                  otp:
 *                      type: string
 *                      example: ""
 *                      description: otp needed if shipper_type is 1. Either pass it as "" i.e empty string for getting otp or the actual OTP received on the mobile number.
 *                  msme_id:
 *                      type: string
 *                      example: "23"
 *                      description: msme_id needed if shipper_type is 2.
 *                  invoiceData:
 *                      type: object
 *                      description: invoiceData is needed for FEDEX and UPS. It should be an object in a specific format. If it do not adhere as per expectation then the API will give relevant error/s.
 *                      properties:
 *                          shipperInvoice:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      box_no:
 *                                          type: string
 *                                          example: "1"
 *                                      description:
 *                                          type: string
 *                                          example: "book"
 *                                      hsn:
 *                                          type: string
 *                                          example: "48201090"
 *                                      quantity:
 *                                          type: string
 *                                          example: "1"
 *                                      rate:
 *                                          type: string
 *                                          example: "112"
 *                                      uom:
 *                                          type: string
 *                                          example: "Dom"
 *                          gstData:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: "104"
 *                                  name:
 *                                      type: string
 *                                      example: ""
 *                                  cgst:
 *                                      type: number
 *                                      example: 0
 *                                  sgst:
 *                                      type: number
 *                                      example: 0
 *                                  igst:
 *                                      type: number
 *                                      example: 0
 *      responses:
 *          '200':
 *              description: Booking placed successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 *          '422':
 *              description: Unprocessable Entity
 *          '404':
 *              description: Not found
 */
