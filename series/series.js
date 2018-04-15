const series = (...tasks) => {
  const next = err => {
    if (err) tasks.splice(0, tasks.length - 1);
    const currentTask = tasks.shift();
    if (currentTask) currentTask(next);
  };

  next();
};

module.exports.series = series;