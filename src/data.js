export const decisionTree = {
    id: "root",
    text: "Сколько человек в вашей команде?",
    isExpanded: true,
    children: [
        {
            id: "node1",
            text: "1-2 человека",
            isExpanded: true,
            children: [
                {
                    id: "node1-1",
                    text: "Вам нужна синхронизация между устройствами?",
                    isExpanded: true,
                    children: [
                        {
                            id: "node1-1-1",
                            text: "Да",
                            isExpanded: true,
                            children: [
                                {
                                    id: "node1-1-1-1",
                                    text: "Какая основная задача вашего инструмента?",
                                    isExpanded: true,
                                    children: [
                                        {
                                            id: "node1-1-1-1-1",
                                            text: "Управление задачами",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node1-1-1-1-1-1",
                                                    text: "Нужна ли интеграция с календарями?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node1-1-1-1-1-1-1",
                                                            text: "Да",
                                                            isExpanded: true,
                                                            children: [
                                                                {
                                                                    id: "node1-1-1-1-1-1-1-1",
                                                                    text: "Требуется ли мобильное приложение?",
                                                                    isExpanded: true,
                                                                    children: [
                                                                        {
                                                                            id: "node1-1-1-1-1-1-1-1-1",
                                                                            text: "Да",
                                                                            isExpanded: false,
                                                                            children: [],
                                                                            url: "https://trello.com", // Trello
                                                                        },
                                                                        {
                                                                            id: "node1-1-1-1-1-1-1-1-2",
                                                                            text: "Нет",
                                                                            isExpanded: false,
                                                                            children: [],
                                                                            url: "https://asana.com", // Asana
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            id: "node1-1-1-1-1-1-2",
                                                            text: "Нет",
                                                            isExpanded: true,
                                                            children: [
                                                                {
                                                                    id: "node1-1-1-1-1-1-2-1",
                                                                    text: "Требуется ли поддержка AI для автоматизации?",
                                                                    isExpanded: true,
                                                                    children: [
                                                                        {
                                                                            id: "node1-1-1-1-1-1-2-1-1",
                                                                            text: "Да",
                                                                            isExpanded: false,
                                                                            children: [],
                                                                            url: "https://clickup.com", // ClickUp
                                                                        },
                                                                        {
                                                                            id: "node1-1-1-1-1-1-2-1-2",
                                                                            text: "Нет",
                                                                            isExpanded: false,
                                                                            children: [],
                                                                            url: "https://basecamp.com", // Basecamp
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            id: "node1-1-1-1-2",
                                            text: "Работа с заметками",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node1-1-1-1-2-1",
                                                    text: "Требуется ли офлайн-доступ?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node1-1-1-1-2-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://evernote.com", // Evernote
                                                        },
                                                        {
                                                            id: "node1-1-1-1-2-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://keep.google.com", // Google Keep
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "node1-1-2",
                            text: "Нет",
                            isExpanded: true,
                            children: [
                                {
                                    id: "node1-1-2-1",
                                    text: "Хотите ли вы автоматизировать рутинные процессы?",
                                    isExpanded: true,
                                    children: [
                                        {
                                            id: "node1-1-2-1-1",
                                            text: "Да",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node1-1-2-1-1-1",
                                                    text: "Требуется ли управление проектами?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node1-1-2-1-1-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://www.wrike.com", // Wrike
                                                        },
                                                        {
                                                            id: "node1-1-2-1-1-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://zapier.com", // Zapier
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            id: "node1-1-2-1-2",
                                            text: "Нет",
                                            isExpanded: false,
                                            children: [],
                                            url: "https://basecamp.com", // Basecamp
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "node2",
            text: "3-10 человек",
            isExpanded: true,
            children: [
                {
                    id: "node2-1",
                    text: "Какой тип работы у вашей команды?",
                    isExpanded: true,
                    children: [
                        {
                            id: "node2-1-1",
                            text: "Проектная работа",
                            isExpanded: true,
                            children: [
                                {
                                    id: "node2-1-1-1",
                                    text: "Необходима ли аналитика производительности?",
                                    isExpanded: true,
                                    children: [
                                        {
                                            id: "node2-1-1-1-1",
                                            text: "Да",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node2-1-1-1-1-1",
                                                    text: "Хотите ли интеграцию с другими системами?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node2-1-1-1-1-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://jira.atlassian.com", // Jira
                                                        },
                                                        {
                                                            id: "node2-1-1-1-1-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://asana.com", // Asana
                                                        },
                                                    ],
                                                },
                                                {
                                                    id: "node2-1-1-1-1-2",
                                                    text: "Важно ли визуальное управление проектами?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node2-1-1-1-1-2-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://trello.com", // Trello
                                                        },
                                                        {
                                                            id: "node2-1-1-1-1-2-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://monday.com", // Monday
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            id: "node2-1-1-1-2",
                                            text: "Нет",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node2-1-1-1-2-1",
                                                    text: "Требуется ли распределение ролей в проекте?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node2-1-1-1-2-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://clickup.com", // ClickUp
                                                        },
                                                        {
                                                            id: "node2-1-1-1-2-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://notion.so", // Notion
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "node2-1-2",
                            text: "Операционная работа",
                            isExpanded: true,
                            children: [
                                {
                                    id: "node2-1-2-1",
                                    text: "Требуется ли контроль повседневных задач?",
                                    isExpanded: true,
                                    children: [
                                        {
                                            id: "node2-1-2-1-1",
                                            text: "Да",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node2-1-2-1-1-1",
                                                    text: "Хотите ли интеграцию с CRM?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node2-1-2-1-1-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://pipedrive.com", // Pipedrive
                                                        },
                                                        {
                                                            id: "node2-1-2-1-1-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://monday.com", // Monday
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            id: "node2-1-2-1-2",
                                            text: "Нет",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node2-1-2-1-2-1",
                                                    text: "Необходима ли визуализация задач?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node2-1-2-1-2-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://kanbanize.com", // Kanbanize
                                                        },
                                                        {
                                                            id: "node2-1-2-1-2-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://notion.so", // Notion
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    id: "node2-1-3",
                                    text: "Гибридная работа",
                                    isExpanded: true,
                                    children: [
                                        {
                                            id: "node2-1-3-1",
                                            text: "Какую часть работы необходимо автоматизировать?",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node2-1-3-1-1",
                                                    text: "Управление задачами",
                                                    isExpanded: false,
                                                    children: [],
                                                    url: "https://asana.com", // Asana
                                                },
                                                {
                                                    id: "node2-1-3-1-2",
                                                    text: "Управление коммуникацией",
                                                    isExpanded: false,
                                                    children: [],
                                                    url: "https://slack.com", // Slack
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "node3",
            text: "До 100 человек",
            isExpanded: true,
            children: [
                {
                    id: "node3-1",
                    text: "Какой уровень управления вам нужен?",
                    isExpanded: true,
                    children: [
                        {
                            id: "node3-1-1",
                            text: "Централизованное управление",
                            isExpanded: true,
                            children: [
                                {
                                    id: "node3-1-1-1",
                                    text: "Требуется ли управление ресурсами?",
                                    isExpanded: true,
                                    children: [
                                        {
                                            id: "node3-1-1-1-1",
                                            text: "Да",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node3-1-1-1-1-1",
                                                    text: "Хотите ли прогнозирование загрузки команды?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node3-1-1-1-1-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://youtrack.jetbrains.com", // YouTrack
                                                        },
                                                        {
                                                            id: "node3-1-1-1-1-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://www.smartsheet.com", // Smartsheet
                                                        },
                                                    ],
                                                },
                                                {
                                                    id: "node3-1-1-1-1-2",
                                                    text: "Требуется ли визуализация рабочего процесса?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node3-1-1-1-1-2-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://kanbanize.com", // Kanbanize
                                                        },
                                                        {
                                                            id: "node3-1-1-1-1-2-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://clickup.com", // ClickUp
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            id: "node3-1-1-1-2",
                                            text: "Нет",
                                            isExpanded: true,
                                            children: [
                                                {
                                                    id: "node3-1-1-1-2-1",
                                                    text: "Требуется ли работа с графиками?",
                                                    isExpanded: true,
                                                    children: [
                                                        {
                                                            id: "node3-1-1-1-2-1-1",
                                                            text: "Да",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://monday.com", // Monday
                                                        },
                                                        {
                                                            id: "node3-1-1-1-2-1-2",
                                                            text: "Нет",
                                                            isExpanded: false,
                                                            children: [],
                                                            url: "https://trello.com", // Trello
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
