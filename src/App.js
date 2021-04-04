import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EngLetter from './accordin1';

import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightMedium,
        color: '#4c4c4d',
        fontFamily: 'Rubik',
    },
    checked: {},
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
    inlineDisplay: {
        listStyle: 'none',
        padding: '0',
        '& li': {
            display: 'inline-block',
            padding: '10px 0',
            color: '#7779ba',
        },
        '& label': {
            marginLeft: '0',
        },
    },
    accordContentSummary: {
        background: '#f9f9f9',
    },
}));

    // dummy data 
    const data = [
        {
            id:'123',
            accordionText:'Statutory Audit - Corporate Engagement Letter',
            subject:'subject',
            body:'body'
        },
        {
            id:'124',
            accordionText:'Tax Audit - Corporate Engagement Letter',
            subject:'subject',
            body:'body'
        },
        {
            id:'125',
            accordionText:'Statutory Audit - Corporate and IT Filing Engagement Letter',
            subject:'subject',
            body:'body'
        },
        {
            id:'126',
            accordionText:'Tax Audit - Corporate and IT Filing Engagement Letter',
            subject:'subject',
            body:'body'
        },
        {
            id:'127',
            accordionText:'Tax Audit - Non Corporate and IT Filing Engagement Letter',
            subject:'subject',
            body:'body'
        },
        {
            id:'128',
            accordionText:'Statutory Audit+TaxAudit+ IT filing - Corporate and IT Filing Engagement Letter',
            subject:'subject',
            body:'body'
        },
    ]

export default function AuditAccordin(props, values) {
    const classes = useStyles();
    // const [selectedValue, setSelectedValue] = React.useState('a');

    const [generalInformation, setGeneralInformationData] = useState([]);

    // console.log('generalInformation', generalInformation);
    const [expanded, setExpanded] = React.useState('');
    const [letters, setLetters] = React.useState([])

    useEffect(() => {

        //get letters
        // axios.get("").then(response =>{
                // setLetters(response.data)
                setLetters(data)    
        // })

    }, [])

    const handleChange = (panel) =>  {
        setExpanded(expanded === panel ? "" : panel);
    };

    const handleSave = (index,letter) =>{
        
        letters[index] = letter
        setLetters([...letters])
        setExpanded("")
        //post new letter
        // axios.post("address", {letter}).then(response =>{
                    
        // })
    }
    
    return (
        <div className={classes.root}>
            {
                letters.map((letter,index) => 
                    <Accordion key={letter.id} square expanded={expanded === 'panel'+index } onChange={() => handleChange('panel'+index)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header" className="padding10">
                            <Typography className={classes.heading}>{letter.accordionText}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordContentSummary}>
                            <EngLetter letter={letter} index={index} handleSave={handleSave} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </div>
    );
}
