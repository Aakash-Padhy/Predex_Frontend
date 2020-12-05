import React, { Component } from "react";
import { render } from "react-dom";
import { FormControl, FormGroup, FormLabel, Button, Grid} from "@material-ui/core";
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';


import './Predict.css';

import MultiChipSelect from "./MultiChipSelect";

const symptoms=['itching',
'skin rash',
'nodal skin eruptions',
'continuous sneezing',
'shivering',
'chills',
'joint pain',
'stomach pain',
'acidity',
'ulcers on tongue',
'muscle wasting',
'vomiting',
'burning micturition',
'spotting  urination',
'fatigue',
'weight gain',
'anxiety',
'cold hands and feets',
'mood swings',
'weight loss',
'restlessness',
'lethargy',
'patches in throat',
'irregular sugar level',
'cough',
'high fever',
'sunken eyes',
'breathlessness',
'sweating',
'dehydration',
'indigestion',
'headache',
'yellowish skin',
'dark urine',
'nausea',
'loss of appetite',
'pain behind the eyes',
'back pain',
'constipation',
'abdominal pain',
'diarrhoea',
'mild fever',
'yellow urine',
'yellowing of eyes',
'acute liver failure',
'fluid overload',
'swelling of stomach',
'swelled lymph nodes',
'malaise',
'blurred and distorted vision',
'phlegm',
'throat irritation',
'redness of eyes',
'sinus pressure',
'runny nose',
'congestion',
'chest pain',
'weakness in limbs',
'fast heart rate',
'pain during bowel movements',
'pain in anal region',
'bloody stool',
'irritation in anus',
'neck pain',
'dizziness',
'cramps',
'bruising',
'obesity',
'swollen legs',
'swollen blood vessels',
'puffy face and eyes',
'enlarged thyroid',
'brittle nails',
'swollen extremeties',
'excessive hunger',
'extra marital contacts',
'drying and tingling lips',
'slurred speech',
'knee pain',
'hip joint pain',
'muscle weakness',
'stiff neck',
'swelling joints',
'movement stiffness',
'spinning movements',
'loss of balance',
'unsteadiness',
'weakness of one body side',
'loss of smell',
'bladder discomfort',
'foul smell of urine',
'continuous feel of urine',
'passage of gases',
'internal itching',
'toxic look (typhos)',
'depression',
'irritability',
'muscle pain',
'altered sensorium',
'red spots over body',
'belly pain',
'abnormal menstruation',
'dischromic  patches',
'watering from eyes',
'increased appetite',
'polyuria',
'family history',
'mucoid sputum',
'rusty sputum',
'lack of concentration',
'visual disturbances',
'receiving blood transfusion',
'receiving unsterile injections',
'coma',
'stomach bleeding',
'distention of abdomen',
'history of alcohol consumption',
'fluid overload.1',
'blood in sputum',
'prominent veins on calf',
'palpitations',
'painful walking',
'pus filled pimples',
'blackheads',
'scurring',
'skin peeling',
'silver like dusting',
'small dents in nails',
'inflammatory nails',
'blister',
'red sore around nose',
'yellow crust ooze'
];

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

class Predict extends React.Component {
  allItems = symptoms
    .map(s => ({ name: s, id: s.toLowerCase() }));
  state = {
    items: this.allItems,
    selectedItem: []
  };

  handleChange = selectedItem => {
    if (this.state.selectedItem.includes(selectedItem)) {
      this.removeSelectedItem(selectedItem);
    } else {
      this.addSelectedItem(selectedItem);
    }
  };

  addSelectedItem(item) {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: [...selectedItem, item],
      items: items.filter(i => i.name !== item)
    }));
  }

  removeSelectedItem = item => {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: selectedItem.filter(i => i !== item),
      items: [...items, { name: item, id: item.toLowerCase() }]
    }));
  };

  handleChangeInput = inputVal => {
    const t = inputVal.split(",");
    if (JSON.stringify(t) !== JSON.stringify(this.state.selectedItem)) {
      this.setState({ inputValue: inputVal });
    }
  };

  render() {
    const { selectedItem, items } = this.state;
    return (
      <FormGroup>
        <FormControl>
        
          <FormLabel>
            <h1><br />PreDx</h1>
          <h4>Give us the opportunity to help you know the diseases you might have been suffereing from.<br />We promise you that you wont regret.</h4>
          </FormLabel>
          
          <MultiChipSelect
            onInputValueChange={this.handleChangeInput}
            inputValue={this.state.inputValue}
            availableItems={items}
            selectedItem={selectedItem}
            onChange={this.handleChange}
            onRemoveItem={this.removeSelectedItem}
          />
        
        </FormControl>
        <div id="button">
        <Grid container justify="center" alignItems="center"  >
              <StyledButton 
                onClick={()=>console.log(selectedItem)
            }>
              PREDICT
              </StyledButton>
        </Grid>
        </div>
      </FormGroup>
      
    );
  }
}

export default Predict;