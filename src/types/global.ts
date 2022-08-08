enum ColumnType  {
	Backlog = 'Backlog' ,
	InProgress = 'In Progress',
	Review = 'Review',
	Done = 'Done',
}

enum TaskType { 
	FeatureRequest = 'Feature Request',
	Design = 'Design',
	QA = 'QA',
	Backend = 'Backend',
	Frontend = 'Frontend'
}

type Task = {
	id: number;
	title: string;
	date: string;
	type?: TaskType;
}



type Column = {
	title: ColumnType,
	tasks: Task[]
}

type Story = {
    id: number,
    title: string,
    columns: Array<Column>
}



export { ColumnType, TaskType, Task, Column, Story}