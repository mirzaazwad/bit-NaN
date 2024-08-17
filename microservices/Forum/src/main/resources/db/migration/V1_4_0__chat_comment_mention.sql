CREATE TABLE IF NOT EXISTS chat_comment_mentions
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    comment_id UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    created    DATE,
    CONSTRAINT fk_chat_comments_mentions_comment_id FOREIGN KEY (comment_id) REFERENCES chat_comments (id)
);