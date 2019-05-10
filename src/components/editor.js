import React, {
    Component,
    useState
} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import '../../src/App.css';

import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/c_cpp';
import 'brace/mode/html';

import 'brace/theme/github';
import 'brace/theme/dracula';
import 'brace/theme/xcode';
import 'brace/theme/dreamweaver';
import 'brace/theme/eclipse';
import { Button,Dropdown } from 'react-bootstrap';

// import 'brace/snippets/html';
import 'brace/snippets/java';
import 'brace/ext/language_tools';

function Editor() {
    const [state, setState] = useState({
        editorProps: {
            placeholder: 'Write your code here....',
            mode: 'java',
            theme: "github",
            name: "editor",
            fontSize: 14,
            showGutter: true,
            highlightActiveLine: false,
            // height:'500px',
            // width:'800px',
            style:{width:'600px',height:'500px'},
            value:''
        },
        options:{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        },
        
    });
    const fontSize=[14,16,18,22,30,36,40];
    // const [selectedLanguage, setLanguage] = useState('java')
  
    function onChange(newValue) {
        console.log('change', newValue);
        setState({...state,editorProps:{...state.editorProps,value:newValue}});
        console.log(state)

    }
    const onSelectLanguage=(newLanguage)=>{
        setState({...state,editorProps:{...state.editorProps,mode:newLanguage}});
        console.log(state)
    }   
    const onSelectFontSize=(newFontSize)=>{
        let newFont=parseInt(newFontSize)
        setState({...state,editorProps:{...state.editorProps,fontSize:newFont}});
        console.log(state)
    }
    const onSelectTheme=(newTheme)=>{
        setState({...state,editorProps:{...state.editorProps,theme:newTheme}});
        console.log(state)
    }
    const compileCode=()=>{
        console.log("Compiling......");
    }
    return ( 
        <div >
    <div className="row"> 
        <div className="col-md-2">
        <div className="row"> 
        <div className="col-md-10 ">
            <label className="labels">Language:</label>
            <select className="dropdowns" value={state.editorProps.mode} 
              onChange={(e) =>{console.log(e.target.value);onSelectLanguage(e.target.value)}}>
                  <option value="java">Java</option>
                  <option value="c_cpp">C++</option> 
                  <option value="c_cpp">C</option>  
                  <option value="python">Python</option>       
            </select>
        </div>
        </div>

        <div className="row"> 
        <div className="col-md-10">
            <label className="labels">Font Size:</label>
            <select className="dropdowns" value={state.editorProps.fontSize} 
              onChange={(e) =>{console.log(e.target.value);onSelectFontSize(e.target.value)}}>{fontSize.map((x) => <option key={x} value={x}>{x}</option>)}</select>
        </div>
        </div>
        <div className="row"> 
        <div className="col-md-10">
            <label className="labels">Editor Theme:</label>
            <select className="dropdowns" value={state.editorProps.fontSize} 
              onChange={(e) =>{console.log(e.target.value);onSelectTheme(e.target.value)}}>
                <option value="github">Github</option>
                <option value="xcode">X-Code</option> 
                <option value="dreamweaver">DreamViewer</option>  
                <option value="eclipse">Eclipse</option>  
                <option value="dracula">Dracula</option>  
            </select>
        </div>
        </div>
        </div>
        <div className="col-md-10" id='editor' > 

            <AceEditor 
                {...state.editorProps}
                setOptions={state.options}
                onChange = {onChange}
            />
            </div>
          
    </div >
      <div className="row"> 
      <div className="col-md-10">
          <label>Status</label>
      </div>
      <div className="col-md-2">
          <Button onClick={compileCode}>Compile</Button>
      </div>
  </div>
  </div> )
}


export default Editor;


// <AceEditor
// mode="html"
// theme="xcode"
// name="content"
// //   onChange={this.onContentChange}
// showPrintMargin={true}
// showGutter={true}
// highlightActiveLine={true}
// //   value={form.content}
// editorProps={{$blockScrolling: Infinity}}
// setOptions={{
//   enableBasicAutocompletion: true,
//   enableLiveAutocompletion: true,
//   enableSnippets: true,
//   showLineNumbers: true,
//   tabSize: 2
// }}
// />