import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {  Prism } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState } from "react";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import LibraryAddCheckSharpIcon from '@mui/icons-material/LibraryAddCheckSharp';


type NoteProps = {
	onDelete: (id:string) => void 
}

export function Note({onDelete}:NoteProps){
	const note = useNote()
	const navigate = useNavigate()
	const [copied,setCopied] = useState("");

	const handleCopy = (code:string) => {
		setCopied(code)
		navigator.clipboard.writeText(code);
		setTimeout(()=> setCopied(""), 1500 )
	  }
	return <>
	<Row className='align-items-center mb-4'>
		<Col>
			<h1>{note.title}</h1>
			{ note.tags.length > 0 && (
				<Stack 
				gap={1} 
				direction="horizontal" 
				className="flex-wrap">
				{	note.tags.map(tag => (
					<Badge className="text-truncate" key={tag.id}>{tag.label}</Badge>
				))}
			</Stack>
			)}
		</Col>
		<Col xs='auto'>
				<Stack gap={2} direction='horizontal'>
					<Link to={`/${note.id}/edit`}>
						<Button variant="primary">Edit</Button>
					</Link>
					<Button onClick={()=>{
						onDelete(note.id)
						navigate('/')
					}} variant="outline-danger">Delete</Button>
					<Link to='/'>
					<Button variant="outline-secondary">Back</Button>
					</Link>
				</Stack>
		</Col>
	</Row>
	<div className="container-lg">
		<div className="row">
			<div className="col-md-6">
				<ReactMarkdown>{note.markdown}</ReactMarkdown>
			</div>
			{ note.code && (
				<>
			<div className="col-md-4 h-auto w-auto "  >
			<div className="position-relative" onClick={()=>handleCopy(note.code)} >
					{ copied === note.code ? (
						<LibraryAddCheckSharpIcon className="position-absolute end-0 mx-2 my-3 text-light"/>
					):(
						<ContentCopyRoundedIcon className="position-absolute end-0 mx-2 my-3 text-light"/>
					) }
					
  			</div>
				<Prism language={note.language} className="rounded-4 shadow-lg p-3 mb-5" style={tomorrow}>{note.code}</Prism>
				
			</div>
			
			</>
			)}
		</div>
	</div>
	
	</>
}