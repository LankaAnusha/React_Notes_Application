import React from 'react';
import ReactDOM from 'react-dom';
import { MdSearch } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import './style.css'
class Header extends React.Component{
  constructor(props)
  {
    super(props)
    this.searchText=this.searchText.bind(this)
  }
  searchText(event)
  {
   this.props.searchText(event.target.value)
  }
  render(){
    return(
        <>
        <div className="hdr">
        <tit>SnapNotes</tit>
        <button onClick={this.props.handleMode}>{this.props.mode?(<><FaSun className='sun-icon' size={10}/>light mode</>):(<><FaMoon className="moon-icon" size={10}/>dark mode</>)}</button>
        </div>
        <div className='hdr1'>
        <div className='search'>
			<MdSearch className='search-icons' size='0.8em' />
			<input type='text' onChange={this.searchText} placeholder='Type to search...'/>
		</div>
      </div>
      </>
    )
  }
  }
export default Header;