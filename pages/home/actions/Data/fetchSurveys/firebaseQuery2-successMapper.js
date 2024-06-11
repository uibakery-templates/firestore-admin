return {{data}}.map(survey => {
  const endDate = new Date(survey.endDate);
  const startDate = new Date(survey.startDate);
  const now = new Date;
	if  (endDate < now) {
  	survey.status = 'Completed'
  }
	if  (startDate > now) {
  	survey.status = 'Scheduled'
  }
  else {
  survey.status = 'In Progress'}
  return survey;
})