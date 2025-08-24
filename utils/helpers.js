// Format task data for response
export const formatTaskResponse = (task) => {
  return {
    id: task._id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate,
    category: task.category,
    tags: task.tags,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt
  };
};

// Pagination helper
export const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? (page - 1) * limit : 0;
  
  return { limit, offset };
};

// Filter helper
export const getFilter = (query) => {
  const filter = {};
  if (query.status) filter.status = query.status;
  if (query.priority) filter.priority = query.priority;
  if (query.category) filter.category = query.category;
  
  return filter;
};