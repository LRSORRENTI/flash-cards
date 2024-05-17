def parse_questions_to_ts(input_file, output_file):
    # Read the file content
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()

    # Split the content into blocks based on double newlines
    blocks = content.strip().split('\n\n')

    # Start building the TypeScript array
    ts_array = "const flashcards: Flashcard[] = [\n"

    # Process each block to extract question and answer and format it into TypeScript object
    for block in blocks:
        parts = block.split('\n')
        question = parts[0].replace('Question: ', '')
        answer = parts[1].replace('Answer: ', '')

        ts_array += f"    {{\n        question: \"{question}\",\n        answer: \"{answer}\"\n    }},\n"

    # Close the TypeScript array
    ts_array += "];\n"

    # Write to the output file
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(ts_array)

# Specify input and output files
input_file = 'documents\\comptiaAPlus.txt'
output_file = 'typescript\\ParsedTextFile.ts'

# Call the function
parse_questions_to_ts(input_file, output_file)
