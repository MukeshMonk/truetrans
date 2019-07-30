import React, { Component } from 'react';

const Inputbox = props => <div className="field_company">
<div className="labelname">{props.labelname}:</div>
<input type={props.type} name={props.name}  placeholder={props.placeholdername} value={props.value} onChange={props.ChangeEvent} />
<span className="errorMsgcompany">{props.ErrorMsg}</span> 
</div>

const ButtonForm = props => <div className="btncompany">
<input type={props.type} className={props.className} value={props.value} />
</div>


class Branch extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.autocomplete = null
      }
      
      componentDidMount() {
        const google = window.google
        // this.autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
    
        // this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { types: [ 'geocode' ] });
google.maps.event.addListener(this.autocomplete, 'place_changed', function() {
  
});
      }
   
    
      initialState() {
        return {
        //   name: '',
         // street_address: '',
          bname:'',
          address:'',
          city: '',
          state: '',
          //zip_code: '',
          googleMapLink: '',
        }
      }
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      handleSubmit(event) {
        event.preventDefault()
        //this.props.dispatch(addParlor(this.state))
        this.clearForm()
      }
      
      handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace();

        let address = addressObject.address_components;
        this.setState({
          bname: addressObject.bname,
          address: address[0].long_name,
          city: address[4].long_name,
          state: address[5].short_name,
         // zip_code: address[8].short_name,
          googleMapLink: addressObject.url
        })
        
      }
      
    
    render() {
      
      return (
        <div className="branch">
             <div id="sc-add-company">
            
                    <h1>Add Branch</h1>
                    <div className="sc-container">
                        <form encType="multipart/form-data" className="add_company_form">
                            <input id="autocomplete" className="input-field" ref="input" type="text" onChange={ this.handleChange}/>
                            {Inputbox({labelname:'Name',type:'text',name:'bname',placeholdername:'Enter Name',value:this.state.bname,ChangeEvent:this.handleChange,ErrorMsg:''})}
                            {Inputbox({labelname:'Address',type:'text',name:'address',placeholdername:'Enter Address',value:this.state.address,ChangeEvent:this.handleChange,ErrorMsg:''})}
                            {Inputbox({labelname:'City',type:'text',name:'city',placeholdername:'Enter City',value:this.state.city,ChangeEvent:this.handleChange,ErrorMsg:''})}
                            {Inputbox({labelname:'State',type:'text',name:'state',placeholdername:'Enter State',value:this.state.state,ChangeEvent:this.handleChange,ErrorMsg:''})}
                            {Inputbox({labelname:'Country',type:'text',name:'country',placeholdername:'Enter Country',value:this.state.country,ChangeEvent:this.handleChange,ErrorMsg:''})}
                            {Inputbox({labelname:'Phone No',type:'text',name:'phone_no.',placeholdername:'Enter Phone No.',ErrorMsg:''})}
                            {Inputbox({labelname:'Email',type:'text',name:'email',placeholdername:'Enter Email',ErrorMsg:''})}
                            {Inputbox({labelname:'Contact Person',type:'text',name:'contact_person',placeholdername:'Enter Contact Person',ErrorMsg:''})}
                            {Inputbox({labelname:'Mobile No',type:'text',name:'mobile_no',placeholdername:'Enter Mobile No.',ErrorMsg:''})}
                            {Inputbox({labelname:'GST No',type:'text',name:'gst_no',placeholdername:'Enter GST No',ErrorMsg:''})}
                            {ButtonForm({type:'submit',className:'save',value:'Save'})}
                            {ButtonForm({type:'submit',className:'save_close',value:'Save & Next'})}
                        </form>
                    </div>
              </div>
                        
        </div>
      );
    }
   
  }
  export default Branch;