<script setup>
  import { useCart } from '~/composables/useCart';

  const { cart, subtotal } = useCart();
</script>

<template>
  <div data-node-type="commerce-checkout-form-container" data-wf-checkout-query="" data-wf-page-link-href-prefix="" class="w-commerce-commercecheckoutformcontainer checkout-form">
    <div class="w-commerce-commercelayoutmain div-block-2">
      <form data-node-type="commerce-checkout-customer-info-wrapper" class="w-commerce-commercecheckoutcustomerinfowrapper">
        <div class="w-commerce-commercecheckoutblockheader">
          <h4>Customer Info</h4>
          <div>* Required</div>
        </div>
        <fieldset class="w-commerce-commercecheckoutblockcontent">
          <label for="" class="w-commerce-commercecheckoutlabel">Email *</label>
          <input class="w-commerce-commercecheckoutemailinput checkout_input" type="text" name="email" required />
        </fieldset>
      </form>
      <form data-node-type="commerce-checkout-shipping-address-wrapper" class="w-commerce-commercecheckoutshippingaddresswrapper">
        <div class="w-commerce-commercecheckoutblockheader">
          <h4>Shipping Address</h4>
          <div>* Required</div>
        </div>
        <fieldset class="w-commerce-commercecheckoutblockcontent">
          <label for="" class="w-commerce-commercecheckoutlabel">Full Name *</label>
          <input class="w-commerce-commercecheckoutshippingfullname checkout_input" name="name" type="text" required />
          <label for="" class="w-commerce-commercecheckoutlabel">Street Address *</label>
          <input class="w-commerce-commercecheckoutshippingstreetaddress checkout_input" name="address_line1" type="text" required />
          <input aria-label="" class="w-commerce-commercecheckoutshippingstreetaddressoptional checkout_input" name="address_line2" type="text" />
          <div class="w-commerce-commercecheckoutrow">
            <div class="w-commerce-commercecheckoutcolumn">
              <label for="" class="w-commerce-commercecheckoutlabel">City *</label>
              <input class="w-commerce-commercecheckoutshippingcity checkout_input" name="address_city" type="text" required />
            </div>
            <div class="w-commerce-commercecheckoutcolumn">
              <label for="" class="w-commerce-commercecheckoutlabel">State/Province</label>
              <input class="w-commerce-commercecheckoutshippingstateprovince checkout_input" name="address_state" type="text" />
            </div>
            <div class="w-commerce-commercecheckoutcolumn">
              <label for="" class="w-commerce-commercecheckoutlabel">Zip/Postal Code *</label>
              <input data-node-type="commerce-checkout-shipping-zip-field" class="w-commerce-commercecheckoutshippingzippostalcode checkout_input" name="address_zip" type="text" required />
            </div>
          </div>
          <label for="" class="w-commerce-commercecheckoutlabel">Country *</label>
          <select class="w-commerce-commercecheckoutshippingcountryselector checkout_input" name="address_country">
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="VG">British Virgin Islands</option>
            <option value="BN">Brunei</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="CV">Cabo Verde</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CW">Curacao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czechia</option>
            <option value="CD">Democratic Republic of the Congo</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="SZ">Eswatini</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="CI">Ivory Coast</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Laos</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="KP">North Korea</option>
            <option value="MK">North Macedonia</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestinian Territory</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="CG">Republic of the Congo</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option value="RU">Russia</option>
            <option value="RW">Rwanda</option>
            <option value="BL">Saint Barthelemy</option>
            <option value="SH">Saint Helena</option>
            <option value="KN">Saint Kitts and Nevis</option>
            <option value="LC">Saint Lucia</option>
            <option value="MF">Saint Martin</option>
            <option value="PM">Saint Pierre and Miquelon</option>
            <option value="VC">Saint Vincent and the Grenadines</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome and Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SX">Sint Maarten</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="GS">South Georgia and the South Sandwich Islands</option>
            <option value="KR">South Korea</option>
            <option value="SS">South Sudan</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="SD">Sudan</option>
            <option value="SR">Suriname</option>
            <option value="SJ">Svalbard and Jan Mayen</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SY">Syria</option>
            <option value="TW">Taiwan</option>
            <option value="TJ">Tajikistan</option>
            <option value="TZ">Tanzania</option>
            <option value="TH">Thailand</option>
            <option value="TL">Timor Leste</option>
            <option value="TG">Togo</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TC">Turks and Caicos Islands</option>
            <option value="TV">Tuvalu</option>
            <option value="VI">U.S. Virgin Islands</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="UM">United States Minor Outlying Islands</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VA">Vatican</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="WF">Wallis and Futuna</option>
            <option value="EH">Western Sahara</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </select>
        </fieldset>
      </form>
      <form data-node-type="commerce-checkout-shipping-methods-wrapper" class="w-commerce-commercecheckoutshippingmethodswrapper">
        <div class="w-commerce-commercecheckoutblockheader">
          <h4>Shipping Method</h4>
        </div>
        <fieldset>
          <div data-node-type="commerce-checkout-shipping-methods-list" class="w-commerce-commercecheckoutshippingmethodslist" data-wf-collection="database.commerceOrder.availableShippingMethods">
            <label class="w-commerce-commercecheckoutshippingmethoditem">
              <input required type="radio" name="shipping-method-choice" />
              <div class="w-commerce-commercecheckoutshippingmethoddescriptionblock">
                <div class="w-commerce-commerceboldtextblock"></div>
                <div></div>
              </div>
              <div></div>
            </label>
          </div>
          <div data-node-type="commerce-checkout-shipping-methods-empty-state" style="display: none" class="w-commerce-commercecheckoutshippingmethodsemptystate">
            <div>No shipping methods are available for the address given.</div>
          </div>
        </fieldset>
      </form>
      <div class="w-commerce-commercecheckoutpaymentinfowrapper">
        <div class="w-commerce-commercecheckoutblockheader">
          <h4>Payment Info</h4>
          <div>* Required</div>
        </div>
        <fieldset class="w-commerce-commercecheckoutblockcontent">
          <label for="" class="w-commerce-commercecheckoutlabel">Card Number *</label>
          <div data-wf-stripe-element-type="cardNumber" data-wf-style-map="{}" style="position: relative" class="w-commerce-commercecheckoutcardnumber checkout_input">
            <div></div>
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0"></div>
          </div>
          <div class="w-commerce-commercecheckoutrow">
            <div class="w-commerce-commercecheckoutcolumn">
              <label for="" class="w-commerce-commercecheckoutlabel">Expiration Date *</label>
              <div data-wf-stripe-element-type="cardExpiry" data-wf-style-map="{}" style="position: relative" class="w-commerce-commercecheckoutcardexpirationdate checkout_input">
                <div></div>
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0"></div>
              </div>
            </div>
            <div class="w-commerce-commercecheckoutcolumn">
              <label for="" class="w-commerce-commercecheckoutlabel">Security Code *</label>
              <div data-wf-stripe-element-type="cardCvc" data-wf-style-map="{}" style="position: relative" class="w-commerce-commercecheckoutcardsecuritycode checkout_input">
                <div></div>
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0"></div>
              </div>
            </div>
          </div>
          <div class="w-commerce-commercecheckoutbillingaddresstogglewrapper">
            <input id="billing-address-toggle" data-node-type="commerce-checkout-billing-address-toggle-checkbox" class="w-commerce-commercecheckoutbillingaddresstogglecheckbox" type="checkbox" checked />
            <label for="billing-address-toggle" class="w-commerce-commercecheckoutbillingaddresstogglelabel"> Billing address same as shipping </label>
          </div>
          <form data-node-type="commerce-checkout-billing-address-wrapper" style="display: none" class="w-commerce-commercecheckoutbillingaddresswrapper">
            <label for="" class="w-commerce-commercecheckoutlabel">Full Name *</label>
            <input class="w-commerce-commercecheckoutbillingfullname checkout_input" name="name" type="text" required />
            <label for="" class="w-commerce-commercecheckoutlabel">Street Address *</label>
            <input class="w-commerce-commercecheckoutbillingstreetaddress checkout_input" name="address_line1" required type="text" />
            <input aria-label="" class="w-commerce-commercecheckoutbillingstreetaddressoptional checkout_input" name="address_line2" type="text" />
            <div class="w-commerce-commercecheckoutrow">
              <div class="w-commerce-commercecheckoutcolumn">
                <label for="" class="w-commerce-commercecheckoutlabel">City *</label>
                <input class="w-commerce-commercecheckoutbillingcity checkout_input" name="address_city" type="text" required />
              </div>
              <div class="w-commerce-commercecheckoutcolumn">
                <label for="" class="w-commerce-commercecheckoutlabel">State/Province</label>
                <input class="w-commerce-commercecheckoutbillingstateprovince checkout_input" name="address_state" type="text" />
              </div>
              <div class="w-commerce-commercecheckoutcolumn">
                <label for="" class="w-commerce-commercecheckoutlabel">Zip/Postal Code *</label>
                <input data-node-type="commerce-checkout-billing-zip-field" class="w-commerce-commercecheckoutbillingzippostalcode checkout_input" name="address_zip" type="text" required />
              </div>
            </div>
          </form>
        </fieldset>
      </div>
      <div class="w-commerce-commercecheckoutorderitemswrapper order-items">
        <div class="w-commerce-commercecheckoutsummaryblockheader">
          <h4>Items in Order</h4>
        </div>
        <fieldset class="w-commerce-commercecheckoutblockcontent">
          <div role="list" class="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems">
            <div class="w-commerce-commercecartitem cart-item" v-for="(item, index) in cart" :key="index">
              <img data-wf-bindings="" :src="`${item.image}`" alt="" class="w-commerce-commercecartitemimage image" />
              <div class="w-commerce-commercecartiteminfo div-block">
                <div data-wf-bindings="" class="w-commerce-commercecartproductname">{{ item.title }}</div>
                <div data-wf-bindings="">{{ item.price }}</div>
                <ul data-wf-bindings="" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems.0.product.f_sku_properties_3dr" data-wf-template-id="wf-template-c451091d-f7cf-9fb7-0eeb-cad6d340c58f">
                  <li>
                    <span data-wf-bindings="">Size</span><span>: </span>
                    <span>{{ item.size.join(',') }}</span>
                  </li>
                </ul>
                <a @click.prevent="removeFromCart(item.title)" role="" data-wf-bindings="" class="remove w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="5c7b8dc6ced3c7e13be0e8ca" aria-label="Remove item from cart"><div>Remove</div></a>
              </div>
              <input data-wf-bindings="" class="w-commerce-commercecartquantity checkout_quantity" required pattern="^[0-9]+$" inputmode="numeric" type="number" name="quantity" autocomplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" :value="`${item.quantity}`" />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="w-commerce-commercelayoutcontainer container w-container">
      <div class="w-commerce-commercelayoutsidebar sticky_summary">
        <div class="w-commerce-commercecheckoutordersummarywrapper">
          <div class="w-commerce-commercecheckoutsummaryblockheader">
            <h4>Order Summary</h4>
          </div>
          <fieldset class="w-commerce-commercecheckoutblockcontent">
            <div class="w-commerce-commercecheckoutsummarylineitem">
              <div>Subtotal</div>
              <div>{{ subtotal }}</div>
            </div>
            <div class="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems">
              <div class="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="w-commerce-commercecheckoutsummarylineitem">
              <div>Total</div>
              <div class="w-commerce-commercecheckoutsummarytotal">{{ subtotal }}</div>
            </div>
          </fieldset>
        </div>
        <a href="#" value="Place Order" data-node-type="commerce-checkout-place-order-button" class="w-commerce-commercecheckoutplaceorderbutton button place-order" data-loading-text="Placing Order...">Place Order</a>
        <div data-node-type="commerce-checkout-error-state" style="display: none" class="w-commerce-commercecheckouterrorstate">
          <div
            aria-live="polite"
            class="w-checkout-error-msg"
            data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems."
            data-w-shipping-error="Sorry. We can’t ship your order to the address provided."
            data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems."
            data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems."
            data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again."
            data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue."
            data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again."
            data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again."
            data-w-invalid-discount-error="This discount is invalid."
            data-w-expired-discount-error="This discount is no longer available."
            data-w-usage-reached-discount-error="This discount is no longer available."
            data-w-requirements-not-met-error="Your order does not meet the requirements for this discount."
          >
            There was an error processing your customer info. Please try again, or contact us if you continue to have problems.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
