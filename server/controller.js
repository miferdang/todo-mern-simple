import express from 'express';
import bodyParser from 'body-parser';
import TaskModel from './model';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  TaskModel.find({}, (err, task) => {
    if (err) return res.status(500).send('Problem finding the task.');
    res.status(200).send(task);
  });
});

router.post('/', (req, res) => {
  TaskModel.create({
    name: req.body.name,
    completed: req.body.completed,
  }, (err, task) => {
    if (err) return res.status(500).send('Problem adding to task data.');
    res.status(200).send(task);
  });
});

router.delete('/:id', (req, res) => {
  TaskModel.findByIdAndRemove(
    req.params.id, (err, task) => {
      if (err) return res.status(500).send('Problem deleting task.');
      res.status(200).send(`Task name : ${task.name} was deleted.`);
    }
  );
});

router.put('/:id', (req, res) => {
  TaskModel.findByIdAndUpdate(
    req.params.id, req.body, { new: true }, (err, task) => {
      if (err) return res.status(500).send('Problem edit task.');
      res.status(200).send(`This task name ${task.name} was edited.`);
    }
  );
});

export default router;
