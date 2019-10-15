import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import classes from './searchPageInputBar.module.css';


const options = [
  { key: 'field', text: 'Field', value: 'field' },
  { key: 'mechanical', text: 'Mechanical', value: 'mechanical' },
  { key: 'civil', text: 'Civil', value: 'civil' },
  { key: 'Electrical', text: 'Electrical', value: 'electrical' }
]


const searchPageInputBar = () => (

  <div className={classes.MyInput}>
    <Input 
    size='large'
    list='ProductsList' 
    placeholder='Search...' 
    icon='search'
    iconPosition='right'
    action={
      <Dropdown button basic floating options={options} defaultValue='mechanical' />
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

export default searchPageInputBar;