import { prevDay, nextDay, prevMonth, nextMonth, prevYear, nextYear, prevEclipse, nextEclipse, prev3eclipse, next3eclipse } from '../utils/NavigationUtils';
import NavButton from './NavButton';
function NavBar(props) {
    return (<nav id='nav'>
        <div className='buttonCol'>
			<NavButton t={props.t} setTValue={props.setTValue} id='prev3eclipse' handler={prev3eclipse} text='&lt;&lt; Multi-Eclipse'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='preveclipse' handler={prevEclipse} text='&lt;&lt; Eclipse'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='prevyear' handler={prevYear} text='&lt;&lt; Year'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='prevmonth' handler={prevMonth} text='&lt;&lt; Month'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='prevday' handler={prevDay} text='&lt;&lt; Day'/>
		</div>
		<div className='buttonCol'>
			<NavButton t={props.t} setTValue={props.setTValue} id='nextday' handler={nextDay} text='Day &gt;&gt;'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='nextmonth' handler={nextMonth} text='Month &gt;&gt;'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='nextyear' handler={nextYear} text='Year &gt;&gt;'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='nexteclipse' handler={nextEclipse} text='Eclipse &gt;&gt;'/>
			<NavButton t={props.t} setTValue={props.setTValue} id='next3eclipse' handler={next3eclipse} text='Multi-Eclipse &gt;&gt;'/>
		</div>
    </nav>)
}

export default NavBar;