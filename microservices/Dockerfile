
FROM ollama/ollama:latest

EXPOSE 11434

RUN nohup bash -c "ollama serve &" && sleep 5 && ollama pull llama3.1
