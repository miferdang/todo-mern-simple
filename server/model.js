import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
});
const TaskModel = mongoose.model('TaskModel', TaskSchema);

export default TaskModel;
