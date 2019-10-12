import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import classes from './inputWithDataList.module.css';

const options = [
  { key: 'fan', text: 'HVAC Fans', value: 'fan' },
  { key: 'boilers', text: 'Boilers', value: 'boilers' },
  { key: 'light', text: 'Lighting', value: 'light' },
  { key: 'sink', text: 'Bathroom Sinks', value: 'sink' },
  { key: 'other', text: 'Others', value: 'other'}
]

const InputExampleDatalist = (props) => (
  <div>
    <Input 
    size='large'
    list='ProductsList' 
    placeholder='Search...' 
    action={
      <Dropdown button basic floating options={options} defaultValue='fan' />
    }
    actionPosition='left'
    />
    <datalist id='ProductsList'>
      <option value='HVAC Fans' />
      <option value='Boilers' />
      <option value='Lighting' />
      <option value='Bathroom Sinks' />
      <option value='Others' />
    </datalist>
  </div>
)

export default InputExampleDatalist;