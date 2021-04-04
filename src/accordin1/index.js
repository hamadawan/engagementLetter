import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const useStyles = makeStyles((theme) => ({
    imcCard: {
        background: '#63637d',
        minHeight: '150px',
        borderRadius: '6px',
        color: '#ffffff',
        fontFamily: 'Rubik',
        padding: '30px',
    },
    imcCardTitle: {
        fontSize: '16px',
    },
    imcCardImg: {
        width: '50%',
        '& img': {
            margin: '30px 0 10px',
            height: '60px',
        },
    },
    imcCardMore: {
        fontSize: '12px',
        fontWeight: '100',
        cursor: 'pointer',
    },
}));

export default function EngLetter({letter,index,handleSave}) {
    const classes = useStyles();
    const history = useHistory();
    const [body,setBody] = useState(letter.body)
    const [subject,setSubject] = useState(letter.subject)

    // const navigate = () => {
    //     history.push('/advith-uat/menu/bankclients');
    // };

    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                    <InputLabel className="lblaudit" htmlFor="person2Mobnumber" shrink>
                        {' '}
                        Subject
                    </InputLabel>
                    <Input
                        fullWidth
                        name="password"
                        className="bottom"
                        type="text"
                        id="subject"
                        // autoComplete="current-password"
                        onChange={(event)=>setSubject(event.target.value)}
                        // onBlur={formik.handleBlur}
                        value={subject}
                        // placeholder="Enter Password"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                    <InputLabel className="lblaudit mtb20" htmlFor="person2Mobnumber" shrink>
                        {' '}
                        Body Content
                    </InputLabel>
                    <div
                        className="bodyTxt"
                    >
                        <CKEditor
                            editor={ ClassicEditor }
                            data={body}
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setBody(data)
                            } }
                            />
                    </div>
                </FormControl>
            </Grid>
            <div className="btnAuditDiv">
                <Button variant="contained" color="primary" size="medium" className="buttonaudit" autoFocus
                    onClick={()=>{
                        let newLetter = {...letter, body:body, subject: subject }
                        handleSave(index,newLetter)
                    }}
                >
                    Save
                </Button>
            </div>
        </Grid>
    );
}
