# Use the Ollama base image
FROM ollama/ollama

# Pull the llama3.1 model
RUN ollama pull llama3.1

# Expose the required port
EXPOSE 11434

# Run the llama3.1 model
CMD ["ollama", "run", "llama3.1"]

