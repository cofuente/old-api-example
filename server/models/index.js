const User = require( './user' )
const Program = require('./program')
const Question = require('./question')
const Answer = require( './answer' )
const Client = require('./client')
const Form = require('./form')
const Submission = require('./submission')
const QuestionForm = require('./questionform')


Question.belongsToMany(Form, {
  through: QuestionForm,
  foreignKey: 'questionUUID'
})
Form.belongsToMany(Question, {
  through: QuestionForm,
  foreignKey: 'formUUID'
})

Submission.belongsTo(Form, {foreignKey: 'formUUID'})

Form.belongsTo( Program, {foreignKey: 'programUUID'} )

Client.belongsTo( Program, {foreignKey: 'programUUID'} )

User.belongsTo(Program, {foreignKey: 'programUUID'})

Answer.belongsTo(Question, {foreignKey: 'questionUUID'} )

Submission.hasMany(Answer, {foreignKey: 'submissionUUID'})

module.exports = {
  Question,
  Answer,
  Form,
  Submission,
  QuestionForm,
  Program,
  Client
}
