import { Column, ColumnType, TaskType, Story } from '@/types/global';
import { defineStore } from 'pinia';

export const useColumnStore = defineStore('column', () => {
	const stories = reactive<Story[]>([
		{
			title: 'Story 1',
			id: 1111111,
			columns: [
				{
					title: ColumnType.Backlog,
					tasks: [
						{
							id: 1,
							title: 'Add discount code to checkout page',
							date: 'Sep 14',
							type: TaskType.Frontend,
						},
						{
							id: 3,
							title: 'Design shopping cart dropdown',
							date: 'Sep 9',
							type: TaskType.Design,
						},
						{
							id: 5,
							title: 'Test checkout flow',
							date: 'Sep 15',
							type: TaskType.QA,
						},
					],
				},
				{
					title: ColumnType.InProgress,
					tasks: [
						{
							id: 6,
							title: 'Design shopping cart dropdown',
							date: 'Sep 9',
							type: TaskType.Design,
						},
					],
				},
				{
					title: ColumnType.Review,
					tasks: [
						{
							id: 9,
							title: 'Provide documentation on integrations',
							date: 'Sep 12',
						},
						{
							id: 13,
							title: 'Add discount code to checkout page',
							date: 'Sep 14',
							type: TaskType.FeatureRequest,
						},
					],
				},
				{
					title: ColumnType.Done,
					tasks: [
					],
				},
			],
		},
		{
			id: 22222222,
			title: 'Story 2',
			columns: [
				{title: ColumnType.Backlog, tasks: []},
				{title: ColumnType.InProgress, tasks: []},
				{title: ColumnType.Review, tasks: []},
				{title: ColumnType.Done, tasks: []}
			]
		}
	]);


	const currentStory = ref(1111111);

	const changeCurrentStory = (storyId: number) => {
		currentStory.value = storyId;
	}

	const findTypeIndex = (taskType: ColumnType) => {
		return [
			ColumnType.Backlog,
			ColumnType.InProgress,
			ColumnType.Review,
			ColumnType.Done,
		].findIndex(column => column === taskType);
	};

	const findStoryIndex = (storyId: number) => {
		return (
			stories.findIndex(story => story.id === storyId) ?? 0
		);
	};



	const addNewTask = (
		taskTitle: string,
		taskType: TaskType,
		storyId: number,
		columnType: ColumnType = ColumnType.Backlog
	) => {
		const columnIndex = findTypeIndex(columnType);
		const storyIndex = findStoryIndex(storyId);
		stories.at(storyIndex)?.columns.at(columnIndex)?.tasks.push({
			id: new Date().valueOf(),
			title: taskTitle,
			date: new Date().toDateString().split(' ').slice(1,3).join(" "),
			type: taskType,
		});
	};

	const deleteTask = (taskID: number, columnType: ColumnType, storyID: number) => {
		const columnIndex = findTypeIndex(columnType);
		const storyIndex = findStoryIndex(storyID);
		const taskIndex =  stories.at(storyIndex)?.columns.at(columnIndex)?.tasks.findIndex(task => task.id === taskID) ?? 0;
		stories.at(storyIndex)?.columns.at(columnIndex)?.tasks.splice(taskIndex, 1)
	}

	const addNewStory = (storyTitle: string) => {
		stories.push({
			title: storyTitle,
			id: new Date().valueOf(),
			columns: [
				{title: ColumnType.Backlog, tasks: []},
				{title: ColumnType.InProgress, tasks: []},
				{title: ColumnType.Review, tasks: []},
				{title: ColumnType.Done, tasks: []}
			]
		})
	}

	const deleteStoryByID = (storyId: number) => {
		const index = findStoryIndex(storyId);
		stories.splice(index, 1);
	}

	return { stories, addNewTask, addNewStory, currentStory , changeCurrentStory , deleteStoryByID, deleteTask};
});
