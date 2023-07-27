drop table if exists Works;
create table Works (
    id integer primary key autoincrement,
    title text not null,
    author text not null unique,
    file text,
    created_at timestamp default current_timestamp
);
insert into works (title, author, file) values ('蜘蛛絲', '芥川龍之介', 'https://pub-779f4b581f1f4788909100a1c9209d43.r2.dev/kumo_no_ito_zh_tw.txt');