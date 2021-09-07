import React from 'react'

/**
 * @param user
 * 
 * TODO [] CREATE CALENDAR?
 * TODO [] CREATE ICONS
 * TODO [] GET TODAY'S DATE
 * TODO [] GET THE DATE NEEDED TO CHANGE SLEEPING SCHEDULE
 * TODO [] CALCULATE WHETHER PHASE DELAY OR ADVANCE IS NEEDED BY TIME ZONE
 * TODO [] CALCULATE WHEN THE START DATE FOR THE PHASE ADVANCE/DELAY IS NEEDED
 * TODO [] 
 * ! Set all your servers’ time zone to UTC.
 * ! Always use the Server’s time to fill up metadata like created, edited, posted etc.
 * ! Always store the datetime in UTC time zone.
 * ! While displaying the datetime to the user, convert it to their local time zone at the application layer.
 * ! Never use timestamps to store past or future.
 * ! Try to use datetime format instead of timestamps as it makes visual debugging easy. With timestamp, you have to convert from seconds to date but datetime is like a string. So, if you find yourself accessing the raw values for debugging, then try to use datetime. 
 * 
 */

/**
 * user
 * user.tempMin = number
 * user.sleepTimeArr = array
 * user.localTime = number
 * user.destinationTime = number
 * user.phaseShift = string
 * user.lightProtocol = string
 * 
 * home city input
 * destination city input
 * last 3 nights sleep time inputs
 * 
 * 
 * take off time 
 * landing time
 * sleep bar
 * viewing light bar
 * minimize light bar
 * 
 * 
 * 
 * change can only happen during the 6 hours prior and after your temperature minimum
 * need to keep track of temp min @ home
 * 
 * 
 * Steps
 * 1. Get local city
 * 2. Get destination city
 * 3. Get departure & arrival dates & times
 * . Give option of either usual wake up time or last 3 wake up times.
 * 
 * 
 * 
 * 
 */ 
export const PhaseShift = (user) => {
	return (
		<div>
			
		</div>
	)
}

