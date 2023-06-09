-- milestone 테이블 더미 데이터 추가

INSERT INTO `milestone` (`TITLE`, `DESCRIPTION`, `DEADLINE`)
VALUES ('마일스톤 1번 제목', '마일스톤 1번 내용', '1997-07-10');
INSERT INTO `milestone` (`TITLE`, `DESCRIPTION`, `DEADLINE`)
VALUES ('마일스톤 2번 제목', '마일스톤 2번 내용', '2023-05-10');
INSERT INTO `milestone` (`TITLE`, `DESCRIPTION`, `DEADLINE`)
VALUES ('마일스톤 3번 제목', '마일스톤 3번 내용', '2023-05-15');

-- member 테이블 더미 데이터 추가

INSERT INTO `member` (`NAME`, `PASSWORD`)
VALUES ('고건호', '1q2w3e4r!');
INSERT INTO `member` (`NAME`, `PASSWORD`, `PROFILE_URL`)
VALUES ('노민정', '1234', 'asdfasdf');

-- issue 테이블 더미 데이터 추가

INSERT INTO `issue` (`TITLE`, `CONTENTS`, `WRITER_ID`, `CREATED_AT`)
VALUES ('이슈 1번 제목', '이슈 1번 내용', 1, '2023-04-25');
INSERT INTO `issue` (`TITLE`, `CONTENTS`, `WRITER_ID`, `CREATED_AT`)
VALUES ('이슈 2번 제목', '이슈 2번 내용', 2, '2023-04-27');
INSERT INTO `issue` (`TITLE`, `CONTENTS`, `WRITER_ID`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('이슈 3번 제목', '이슈 3번 내용', 2, 1, '2023-05-05');
INSERT INTO `issue` (`TITLE`, `CONTENTS`, `WRITER_ID`, `IS_OPENED`, `MILESTONE_ID`, `CREATED_AT`)
VALUES ('이슈 4번 제목', '이슈 4번 내용', 1, false, 2, '2023-05-07');

-- label 테이블 더미 데이터 추가

INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 1번 제목', '레이블 1번 설명', '#00FF00', 'LIGHT');
INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 2번 제목', '레이블 2번 설명', '##FFFF00', 'DARK');
INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 3번 제목', '레이블 3번 설명', '#0000FF', 'LIGHT');
INSERT INTO `label` (`TITLE`, `DESCRIPTION`, `BACKGROUND_COLOR`, `FONT_COLOR`)
VALUES ('레이블 4번 제목', '레이블 4번 설명', '#808080', 'DARK');

-- label_attached_issues 더미 데이터 추가

INSERT INTO `label_attached_issues`
VALUES (1, 1);
INSERT INTO `label_attached_issues`
VALUES (1, 2);
INSERT INTO `label_attached_issues`
VALUES (2, 2);
INSERT INTO `label_attached_issues`
VALUES (2, 3);
INSERT INTO `label_attached_issues`
VALUES (3, 4);
