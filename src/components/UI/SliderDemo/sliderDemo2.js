import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider2(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 80]);


    const handleChange = (event, newValue) => {
        props.passValue2(newValue);
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <input style={{textAlign:"center", display:"inline-flex", margin:"2%", padding: "0%", width: "21.5%", height: "1.4em"}} type="text" value={props.left} />
            <Slider style={{ width: "100px", textAlign: "center", padding: "0" }}
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
            <input style={{textAlign:"center", display:"inline-flex", margin:"2%", padding: "0%", width: "21.5%", height: "1.4em"}} type="text" value={props.right} />
        </div>
    );
}