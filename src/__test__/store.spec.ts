import { render, fireEvent } from '@testing-library/vue';
import { DemoStory, useColumnStore, FIRST_STORY_ID, SECOND_STORY_ID, FIRST_TASK_ID } from '@/store';
import { setActivePinia, createPinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { ColumnType, TaskType } from '@/types/global';

describe('tests story store', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('should initialize', () => {
		const store = useColumnStore();
		expect(store.stories).toEqual(DemoStory);
		expect(store.currentStory).toEqual(FIRST_STORY_ID);
	});

    it('should changeCurrentStory', () => {
		const store = useColumnStore();
        store.changeCurrentStory(SECOND_STORY_ID)
		expect(store.currentStory).toEqual(SECOND_STORY_ID);
	});

    it('should changeCurrentStory', () => {
		const store = useColumnStore();
        store.changeCurrentStory(SECOND_STORY_ID)
		expect(store.currentStory).toEqual(SECOND_STORY_ID);
	});

    it('should addNewTask', () => {
		const store = useColumnStore();
        store.addNewTask('test-title', TaskType.Design, FIRST_STORY_ID, ColumnType.Backlog)
		expect(store.stories[0].columns[0].tasks.length).toEqual(4);
	});

    it('should deleteTask', () => {
		const store = useColumnStore();
        store.deleteTask(FIRST_TASK_ID, ColumnType.Backlog, FIRST_STORY_ID)
		expect(store.stories[0].columns[0].tasks.length).toEqual(3);
	});

    it('should addNewStory', () => {
		const store = useColumnStore();
        store.addNewStory('story-title');
		expect(store.stories.length).toEqual(3);
	});

    it('should deleteStory', () => {
		const store = useColumnStore();
        store.deleteStoryByID(SECOND_STORY_ID);
		expect(store.stories.length).toEqual(2);
	});
});
