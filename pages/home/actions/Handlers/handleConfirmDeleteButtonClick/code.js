{{ui.modal2.close()}}
const surveyId = {{params.surveyId}}
return {{state.surveys}}.filter(survey => survey.itemId !== surveyId);