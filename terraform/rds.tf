resource "aws_db_instance" "accordai_postgres" {
  identifier        = "accordai-postgres"
  engine            = "postgres"
  engine_version    = "15"
  instance_class    = "db.t3.micro"
  allocated_storage = 20

  db_name  = "accordai"
  username = "postgres"
  password = "accordai-password"

  publicly_accessible = true
  skip_final_snapshot = true

  vpc_security_group_ids = [
    aws_security_group.accordai_sg.id
  ]
}
