{{ui.editSurveyForm.close()}}
return {{state.surveys}}.map(survey => survey.itemId === {{data.itemId}} ? {{data}} : survey)