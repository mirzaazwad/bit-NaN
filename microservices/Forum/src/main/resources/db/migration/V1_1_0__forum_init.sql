CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS forum
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    image      VARCHAR(255),
    created    DATE,
    stars      BIGINT,
    reviews    BIGINT,
    type       VARCHAR(50)  NOT NULL,
    CONSTRAINT chk_forum_type CHECK (type IN ('DOCUMENT', 'CHAT'))
);

CREATE TABLE IF NOT EXISTS forum_reviews
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    forum_id   UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    review     TEXT,
    image      VARCHAR(255),
    created    DATE,
    modified   DATE,
    CONSTRAINT fk_forum_id FOREIGN KEY (forum_id) REFERENCES forum (id)
);

CREATE TABLE IF NOT EXISTS forum_stars
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    forum_id   UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    image      VARCHAR(255),
    created    DATE,
    modified   DATE,
    CONSTRAINT fk_forum_stars_forum_id FOREIGN KEY (forum_id) REFERENCES forum (id)
);

CREATE TABLE IF NOT EXISTS chat
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    forum_id   UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    image      VARCHAR(255),
    prompt     TEXT,
    response   TEXT,
    created    DATE,
    upvotes    BIGINT,
    downvotes  BIGINT,
    comments   BIGINT,
    CONSTRAINT fk_chat_forum_id FOREIGN KEY (forum_id) REFERENCES forum (id)
);

CREATE TABLE IF NOT EXISTS chat_upvotes
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id    UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    image      VARCHAR(255),
    created    DATE,
    modified   DATE,
    CONSTRAINT fk_chat_upvotes_chat_id FOREIGN KEY (chat_id) REFERENCES chat (id)
);

CREATE TABLE IF NOT EXISTS chat_downvotes
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id    UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    image      VARCHAR(255),
    created    DATE,
    modified   DATE,
    CONSTRAINT fk_chat_downvotes_chat_id FOREIGN KEY (chat_id) REFERENCES chat (id)
);


CREATE TABLE IF NOT EXISTS chat_comments
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id    UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    comment    TEXT,
    image      VARCHAR(255),
    created    DATE,
    modified   DATE,
    CONSTRAINT fk_chat_comments_chat_id FOREIGN KEY (chat_id) REFERENCES chat (id)
);

CREATE TABLE IF NOT EXISTS chat_documents
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id    UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_name  VARCHAR(255) NOT NULL,
    document   TEXT,
    image      VARCHAR(255),
    created    DATE,
    modified   DATE,
    CONSTRAINT fk_chat_documents_chat_id FOREIGN KEY (chat_id) REFERENCES chat (id)
);




