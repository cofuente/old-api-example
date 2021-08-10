const Program = require('./program')
const Form = require('./form')
const Client = require('./client')
const User = require( './user' )
const Question = require('./question')
const QuestionForm = require('./questionform')
const Submission = require('./submission')
const Answer = require( './answer' )


Question.belongsToMany(Form, {
  through: QuestionForm,
  foreignKey: 'questionUUID'
})
Form.belongsToMany(Question, {
  through: QuestionForm,
  foreignKey: 'formUUID'
})

Submission.belongsTo( Form, {foreignKey: 'formUUID'} )

Form.belongsTo(Program, {foreignKey: 'programUUID'})

Client.belongsTo(Program, {foreignKey: 'programUUID'})

User.belongsTo(Program, {foreignKey: 'programUUID'})

Answer.belongsTo( Question, {foreignKey: 'questionUUID'})

Submission.hasMany(Answer, {foreignKey: 'submissionUUID'})

module.exports = {
  Program,
  Form,
  Client,
  User,
  Question,
  QuestionForm,
  Submission,
  Answer,
}
